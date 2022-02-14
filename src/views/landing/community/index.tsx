import React from "react";
import {
  CommunitySection,
  CommunityWrapper,
  FormInputWrapper,
  GetInTouchButton,
  GetInTouchForm,
  JoinDescSection,
  LinkGroup,
  LinkItem,
} from "./community.styled";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const FormInput = ({ label, value, onChange, name }: any) => {
  return (
    <FormInputWrapper>
      <span>{label}</span>
      <input value={value} onChange={onChange} name={name} />
    </FormInputWrapper>
  );
};

const CommunityPart = () => {
  return (
    <CommunityWrapper id="menu">
      <CommunitySection>
        <JoinDescSection>
          <h1>Join the community</h1>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque viverra nibh vivamus sagittis, pretium ultrices elit sit purus. Vulputate arcu, ipsum, cursus feugiat nunc scelerisque non magna."
            }
          </p>
        </JoinDescSection>
        <GetInTouchForm>
          <FormInput label="name*" />
          <FormInput label="email*" />
          <FormInput label="message*" />
          <GetInTouchButton>
            <span>
              get in touch
              <HiOutlineArrowNarrowRight />
            </span>
          </GetInTouchButton>
        </GetInTouchForm>
      </CommunitySection>
      <CommunitySection>
        <LinkGroup>
          <LinkItem>Discord</LinkItem>
          <LinkItem>instagram</LinkItem>
          <LinkItem>facebook</LinkItem>
          <LinkItem>twitter</LinkItem>
        </LinkGroup>
        <LinkGroup dir="rtl">
          <LinkItem>{"privacy & policy"}</LinkItem>
          <LinkItem>{"cookies policy"}</LinkItem>
        </LinkGroup>
      </CommunitySection>
    </CommunityWrapper>
  );
};

export default CommunityPart;
