import os
from flask import Flask, request, render_template, url_for, send_from_directory
import pandas as pd
from flask_sslify import SSLify

app = Flask(__name__)
sslify = SSLify(app)

unpickled_data = pd.read_pickle("recc_model1.pkl")
loaded_skill = unpickled_data['skills'].values.tolist()
loaded_education = unpickled_data['Education'].values.tolist()
loaded_experience = unpickled_data['experience'].values.tolist()
loaded_payrate = unpickled_data['payrate'].values.tolist()

# Route to serve files from the .well-known/pki-validation directory
#what to write in <path:filename> 
@app.route('/.well-known/pki-validation/<path:filename>')
def serve_file(filename):
    root_dir = os.path.abspath(os.path.dirname(__file__))
    return send_from_directory(os.path.join(root_dir, '.well-known', 'pki-validation'), 'D56B9DA224E8CA11D42D4692765AFABA.txt')

@app.route('/')
def main():
    return render_template("Recommendation11.html", all_skill=loaded_skill, all_education=loaded_education, all_experience=loaded_experience,all_payrate=loaded_payrate)

@app.route('/recommendation', methods=['POST'])
def rec():
    if request.method == 'POST':
        skill = request.form.get('sk')
        Education = request.form.get('ed')
        experience= request.form.get('ex')
        payrate = request.form.get('sa')
        print(skill,Education,experience,payrate)
        df_st = unpickled_data[(unpickled_data['skills'] == skill) & (unpickled_data['Education'] == Education) & (unpickled_data['experience'] == experience) & (unpickled_data['payrate'] == payrate)]
        op = []
        for x in df_st.values.tolist():
            op.append([x[0], x[15], x[10], x[7], x[2], x[8] ,x[6]])
        return render_template("results.html", op=op)
    else:
        return redirect(url_for('main'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=443, ssl_context=('/etc/pki/tls/certs/3_109_200_217.crt', '/etc/pki/tls/private/example.com.key'))
