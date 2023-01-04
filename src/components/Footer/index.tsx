import React from "react";
import {
  Base,
  Container,
  ContentWrapper,
  Emphasis,
  Left,
  Section,
  Statistics,
  Summary,
  TermsAndPolicy,
  TermsAndPolicyItem,
} from "./style";

const Footer: React.FC = () => {
  return (
    <Base>
      <Section>
        <Statistics>
          <Summary>
            지금까지&nbsp;
            <Emphasis>* 664, 934, 343 개의 평가가</Emphasis>
            &nbsp;쌓였어요.
          </Summary>
        </Statistics>
        <Container>
          <ContentWrapper>
            <Left>
              <TermsAndPolicy>
                <TermsAndPolicyItem>서비스 이용약관</TermsAndPolicyItem>
                <TermsAndPolicyItem>개인정보 처리방침</TermsAndPolicyItem>
                <TermsAndPolicyItem>회사 정보</TermsAndPolicyItem>
              </TermsAndPolicy>
            </Left>
          </ContentWrapper>
        </Container>
      </Section>
    </Base>
  );
};

export default Footer;
