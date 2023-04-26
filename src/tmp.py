# import pickle
#
# # open a file, where you stored the pickled data
# file = open('recc_model.pkl', 'rb')
#
# # dump information to that file
# data = pickle.load(file)
#
# # close the file
# file.close()
#
# print('Showing the pickled data:')
# print(data)
# cnt = 0
# for item in data:
#     print('The data ', cnt, ' is : ', item)
#     cnt += 1

import pandas as pd


unpickled_data = pd.read_pickle("recc_model1.pkl")
# print(unpickled_data.values.tolist())
# print(unpickled_data['skills'])

#print(unpickled_data[unpickled_data['skills'] == "IT Software - Application Programming"])

# print( len( unpickled_data.values.tolist() ) )

for x in unpickled_data:
    print(x)