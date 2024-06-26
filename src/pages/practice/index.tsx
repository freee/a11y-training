import * as React from 'react';
import { Title } from '../../components/Title';
import {
  Button,
  CheckBox,
  FormItem,
  FormLabel,
  H2,
  H3,
  H4,
  IconButton,
  Li,
  P,
  RadioButton,
  TextField,
  TextLink,
  Ul,
} from '../../components/parts';
import { publicPath } from '../../utils/publicPath';
import {
  MdAdd,
  MdContentCopy,
  MdDelete,
  MdEdit,
  MdRemove,
  MdHelp,
} from 'react-icons/md';
import { BadVisual } from '../../components/examples/link';
import { ExampleContainer } from '../../components/examples';
import { styled } from 'styled-components';

const SmallButton = styled.button`
  width: 1rem;
  height: 1rem;
  margin: 0 0.25rem;
  background: #fff;
  color: #323232;
  border: 1px solid #d7d2d2;
  font-size: 0.625rem;
  border-radius: 50%;
  padding: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition-property: background-color, color, border-color;
  transition-duration: 0.3s;
  cursor: pointer;
  &:hover {
    color: #2864f0;
    border-color: #2864f0;
    background-color: #ebf3ff;
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px #fff, 0 0 0 4px #73a5ff, 0 0 0 5px #fff;
  }
`;

const GrayText = styled.p`
  color: #999;
`;

const ErrorMessage = styled(P)`
  color: #dc1e32;
`;

const HelpIcon = styled.span`
  color: #8c8989;
  font-size: 1.5em;
  margin-left: 0.25em;
  cursor: pointer;
  position: relative;
  display: inline-block;
`;
const Help = styled.span`
  display: none;
  position: absolute;
  bottom: calc(100% + 0.5rem);
  color: #323232;
  left: -1.25rem;
  background-color: #fff;
  border: 1px solid #d7d2d2;
  padding: 0.5em;
  border-radius: 0.25em;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.3);
  z-index: 1;
  width: 20rem;
  font-size: 0.75rem;
  font-weight: normal;
  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: calc(1.5rem - 2px);
    border: calc(0.5em + 2px) solid transparent;
    border-top-color: #d7d2d2;
  }
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 1.5rem;
    border: 0.5em solid transparent;
    border-top-color: #fff;
  }
`;

const Practice = (): JSX.Element => {
  React.useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    const original = html.getAttribute('lang');
    html.setAttribute('lang', '');
    return () => {
      html.setAttribute('lang', original || '');
    };
  });
  const [age, setAge] = React.useState<
    '10' | '20' | '30' | '40' | '50' | 'none'
  >();
  const [region, setRegion] = React.useState<
    | 'hokkaido'
    | 'tohoku'
    | 'kanto'
    | 'chubu'
    | 'kinki'
    | 'chugoku'
    | 'shikoku'
    | 'kyushu'
    | 'okinawa'
    | 'overseas'
  >();
  const [counter, setCounter] = React.useState(12345);
  const [postalCode, setPostalCode] = React.useState('');
  const postalCodeTouchedRef = React.useRef(false);
  const [postalCodeMessage, setPostalCodeMessage] = React.useState('');
  const [helpHover, setHelpHover] = React.useState(false);
  const [agree, setAgree] = React.useState(false);

  return (
    <>
      <Title>アクセシビリティチェックの練習ページ</Title>

      <H2>アクセシビリティチェックの練習ページ</H2>
      <P>
        このページにはたくさんの悪い例を置いています。アクセシビリティチェックの練習に使ってください。
      </P>
      <Ul>
        <Li>
          ガイドラインは
          <TextLink href="https://a11y-guidelines.freee.co.jp/checks/checklist.html">
            こちら
          </TextLink>
        </Li>
        <Li>
          チェックリストは
          <TextLink
            as="span"
            onClick={() =>
              (location.href =
                'https://a11y-guidelines.freee.co.jp/checks/index.html')
            }
          >
            こちら
          </TextLink>
        </Li>
      </Ul>
      <H3 as="div">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={publicPath('welcome_to_my_homepage.png')}
          width={600}
          height={40}
          style={{
            width: `${600 / 16}rem`,
            height: `${40 / 16}rem`,
          }}
        />
      </H3>
      <P>
        <span
          style={{ color: '#ffb91e', fontSize: '16px', fontWeight: 'bold' }}
        >
          黒部ダム
        </span>
        は、日本でおすすめの観光スポットです。大迫力の放水をぜひご覧ください。
      </P>
      <P>
        <img
          src={publicPath('kurobe_dam.jpg')}
          alt="かわいい猫の写真"
          width={300}
          height={400}
        />
      </P>
      <H3 as="h4">freeeの紹介</H3>
      <BadVisual />
      <H3 as="h4">ボタン</H3>
      <ExampleContainer>
        <IconButton
          IconComponent={MdEdit}
          onClick={() => window.alert('編集')}
        />
        <IconButton
          IconComponent={MdContentCopy}
          aria-label="コピー"
          onClick={() => window.alert('コピー')}
          focusIndicator="none"
        />
        <IconButton
          IconComponent={MdDelete}
          onClick={() => window.alert('削除')}
          as="span"
        />
      </ExampleContainer>
      <H4>
        カウンター
        <HelpIcon>
          <MdHelp
            role="img"
            aria-label="ヘルプ"
            onMouseEnter={() => setHelpHover(true)}
            onMouseLeave={() => setHelpHover(false)}
            onFocus={() => setHelpHover(true)}
            onBlur={() => setHelpHover(false)}
            tabIndex={0}
          />
          <Help style={{ display: helpHover ? 'block' : 'none' }}>
            カウンターの値を増減するボタンです。ボタンを押すとカウンターの値が増減します。
            詳しくは <TextLink href="http://example.com/">こちら</TextLink>
          </Help>
        </HelpIcon>
      </H4>
      <ExampleContainer>
        <SmallButton
          onClick={() => setCounter(counter + 1)}
          aria-label="カウントアップ"
        >
          <MdAdd />
        </SmallButton>
        <output>{counter}</output>
        <SmallButton
          onClick={() => setCounter(counter - 1)}
          aria-label="カウントダウン"
        >
          <MdRemove />
        </SmallButton>
      </ExampleContainer>

      <H3 as="h4">フォーム</H3>
      <ExampleContainer>
        <FormItem>
          <label htmlFor="name">
            <FormLabel>氏名</FormLabel>
          </label>
          <TextField type="text" />
          <GrayText>姓と名の間には全角スペースを入れてください</GrayText>
        </FormItem>
        <FormItem>
          <FormLabel>メールアドレス</FormLabel>
          <TextField type="email" id="name" />
        </FormItem>
        <FormItem>
          <fieldset>
            <legend>
              <FormLabel>性別</FormLabel>
            </legend>
            <RadioButton name="sex" value="1">
              男性
            </RadioButton>
            <RadioButton name="sex" value="2">
              女性
            </RadioButton>
            <RadioButton name="sex" value="9">
              その他
            </RadioButton>
          </fieldset>
        </FormItem>
        <FormItem>
          <fieldset>
            <legend>年代</legend>
            <RadioButton
              id="age10"
              value="10"
              checked={age === '10'}
              onChange={(e) => {
                e.target.checked && setAge('10');
              }}
            >
              <label htmlFor="age10">10代</label>
            </RadioButton>
            <RadioButton
              id="age20"
              value="20"
              checked={age === '20'}
              onChange={(e) => {
                e.target.checked && setAge('20');
              }}
            >
              <label htmlFor="age20">20代</label>
            </RadioButton>
            <RadioButton
              id="age30"
              value="30"
              checked={age === '30'}
              onChange={(e) => {
                e.target.checked && setAge('30');
              }}
            >
              <label htmlFor="age30">30代</label>
            </RadioButton>
            <RadioButton
              id="age40"
              value="40"
              checked={age === '40'}
              onChange={(e) => {
                e.target.checked && setAge('40');
              }}
            >
              <label htmlFor="age40">40代</label>
            </RadioButton>
            <RadioButton
              id="age50"
              value="50"
              checked={age === '50'}
              onChange={(e) => {
                e.target.checked && setAge('50');
              }}
            >
              <label htmlFor="age50">50代以上</label>
            </RadioButton>
            <RadioButton
              id="ageNone"
              value="none"
              checked={age === 'none'}
              onChange={(e) => {
                e.target.checked && setAge('none');
              }}
            >
              <label htmlFor="ageNone">解答しない</label>
            </RadioButton>
          </fieldset>
        </FormItem>
        <FormItem>
          <fieldset>
            <legend>地域</legend>
            <RadioButton
              id="regionHokkaido"
              value="hokkadio"
              checked={region === 'hokkaido'}
              onChange={(e) => {
                e.target.checked && setRegion('hokkaido');
              }}
            >
              <label htmlFor="regionHokkaido">北海道</label>
            </RadioButton>
            <RadioButton
              id="regionTohoku"
              value="tohoku"
              checked={region === 'tohoku'}
              onChange={(e) => {
                e.target.checked && setRegion('tohoku');
              }}
            >
              <label htmlFor="regionTohoku">東北</label>
            </RadioButton>
            <RadioButton
              id="regionKanto"
              value="kanto"
              checked={region === 'kanto'}
              onChange={(e) => {
                e.target.checked && setRegion('kanto');
              }}
            >
              <label htmlFor="regionKanto">関東</label>
            </RadioButton>
            <RadioButton
              id="regionChubu"
              value="chubu"
              checked={region === 'chubu'}
              onChange={(e) => {
                e.target.checked && setRegion('chubu');
              }}
            >
              <label htmlFor="regionChubu">中部</label>
            </RadioButton>
            <RadioButton
              id="regionKinki"
              value="kinki"
              checked={region === 'kinki'}
              onChange={(e) => {
                e.target.checked && setRegion('kinki');
              }}
            >
              <label htmlFor="regionKinki">近畿</label>
            </RadioButton>
            <RadioButton
              id="regionChugoku"
              value="chugoku"
              checked={region === 'chugoku'}
              onChange={(e) => {
                e.target.checked && setRegion('chugoku');
              }}
            >
              <label htmlFor="regionChugoku">中国</label>
            </RadioButton>
            <RadioButton
              id="regionShikoku"
              value="shikoku"
              checked={region === 'shikoku'}
              onChange={(e) => {
                e.target.checked && setRegion('shikoku');
              }}
            >
              <label htmlFor="regionShikoku">四国</label>
            </RadioButton>
            <RadioButton
              id="regionKyushu"
              value="kyushu"
              checked={region === 'kyushu'}
              onChange={(e) => {
                e.target.checked && setRegion('kyushu');
              }}
            >
              <label htmlFor="regionKyushu">九州</label>
            </RadioButton>
            <RadioButton
              id="regionOkinawa"
              value="okinawa"
              checked={region === 'okinawa'}
              onChange={(e) => {
                e.target.checked && setRegion('okinawa');
              }}
            >
              <label htmlFor="regionOkinawa">沖縄</label>
            </RadioButton>
            <RadioButton
              id="regionOverseas"
              value="overseas"
              checked={region === 'overseas'}
              onChange={(e) => {
                e.target.checked && setRegion('overseas');
              }}
            >
              <label htmlFor="regionOverseas">海外</label>
            </RadioButton>
          </fieldset>
        </FormItem>
        <FormItem>
          <label htmlFor="postal_code">
            <FormLabel>郵便番号</FormLabel>
          </label>
          <TextField
            type="text"
            value={postalCode}
            onFocus={() => {
              postalCodeTouchedRef.current = true;
              setPostalCodeMessage(
                postalCodeTouchedRef.current &&
                  !postalCode.match(/^[０-９]{3}-[０-９]{4}$/)
                  ? '入力形式が正しくありません'
                  : ''
              );
            }}
            onChange={(e) => {
              const value = e.target.value;
              setPostalCode(value);
              setPostalCodeMessage(
                postalCodeTouchedRef.current &&
                  !value.match(/^[０-９]{3}-[０-９]{4}$/)
                  ? '入力形式が正しくありません'
                  : ''
              );
            }}
            placeholder="１４１-００３２"
            aria-label="postal_code"
            id="postal_code"
          />
          {postalCodeMessage && (
            <ErrorMessage>{postalCodeMessage}</ErrorMessage>
          )}
        </FormItem>
        <div
          style={{
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column-reverse',
            marginBottom: '1rem',
            gap: '1rem',
          }}
        >
          <FormItem>
            <label htmlFor="address">
              <FormLabel>住所</FormLabel>
            </label>
            <TextField type="text" id="address" />
          </FormItem>
          <FormItem>
            <label htmlFor="city">
              <FormLabel>市区町村</FormLabel>
            </label>
            <TextField type="text" id="city" />
          </FormItem>
          <FormItem>
            <label htmlFor="prefecture">
              <FormLabel>都道府県</FormLabel>
            </label>
            <TextField type="text" id="prefecture" />
          </FormItem>
        </div>
        <FormItem>
          <Button
            onMouseDown={() => {
              window.alert(
                postalCodeMessage
                  ? '送信できません。入力内容を確認してください'
                  : !agree || !postalCode
                  ? '入力が不正です'
                  : '送信しました'
              );
            }}
            as="span"
            tabIndex={0}
          >
            送信
          </Button>

          <div style={{ display: 'inline-block', marginLeft: '1rem' }}>
            <CheckBox
              name="tos"
              value="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            >
              利用規約に同意する
            </CheckBox>
          </div>
        </FormItem>
      </ExampleContainer>
    </>
  );
};

export default Practice;
