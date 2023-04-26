/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Icon,
  Image,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { detailedUserInfo, frame32129767076, overrides, ...rest } = props;
  const jobsOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "3.109.200.217/",
  });
  const buttonOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="33px"
      direction="row"
      width="1512px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 24px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Icon
          width="32px"
          height="32px"
          viewBox={{ minX: 0, minY: 0, width: 32, height: 32 }}
          paths={[
            {
              d: "M15.1225 1.60573C15.5017 0.911796 16.4983 0.911796 16.8775 1.60573L19.7522 6.86593C19.9576 7.24192 20.3798 7.44522 20.8019 7.37144L26.7068 6.33925C27.4858 6.20308 28.1071 6.98224 27.801 7.71138L25.4807 13.2386C25.3149 13.6336 25.4192 14.0904 25.74 14.3744L30.2286 18.3475C30.8208 18.8716 30.599 19.8432 29.8381 20.0585L24.0701 21.6906C23.6578 21.8073 23.3657 22.1736 23.3437 22.6015L23.0361 28.5881C22.9955 29.3778 22.0976 29.8102 21.4548 29.3495L16.5825 25.8575C16.2343 25.6079 15.7657 25.6079 15.4175 25.8575L10.5452 29.3495C9.90242 29.8102 9.00453 29.3778 8.96395 28.5881L8.65629 22.6015C8.6343 22.1736 8.34216 21.8073 7.92988 21.6906L2.16189 20.0585C1.40097 19.8432 1.17921 18.8716 1.77136 18.3475L6.26001 14.3744C6.58084 14.0904 6.68511 13.6336 6.51926 13.2386L4.19898 7.71139C3.89289 6.98224 4.51424 6.20308 5.29322 6.33925L11.1981 7.37144C11.6202 7.44522 12.0424 7.24192 12.2478 6.86593L15.1225 1.60573Z",
              fill: "rgba(64,106,191,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Star 1")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Job Portal"
          {...getOverrideProps(overrides, "Job Portal")}
        ></Text>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Jobs"
          onClick={() => {
            jobsOnClick();
          }}
          {...getOverrideProps(overrides, "Jobs")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Applicants"
          {...getOverrideProps(overrides, "Applicants")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Company"
          {...getOverrideProps(overrides, "Company")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <SearchField
          placeholder="Search"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon")}
        >
          <Icon
            width="16px"
            height="19.5px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
            paths={[
              {
                d: "M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z",
                fill: "rgba(51,51,51,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="10.42%"
            bottom="8.33%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Image
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={detailedUserInfo?.profilePicture}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Button
          border="1px SOLID rgba(4,125,149,1)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          shrink="0"
          backgroundColor="rgba(184,206,249,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Sign Out"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
