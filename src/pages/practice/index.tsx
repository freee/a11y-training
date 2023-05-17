import * as React from 'react';
import { Title } from '../../components/Title';
import {
  Button,
  FormItem,
  H2,
  H3,
  IconButton,
  Li,
  P,
  RadioButton,
  TextLink,
  Ul,
} from '../../components/parts';
import { NoLabel } from '../../components/examples/form';
import { publicPath } from '../../utils/publicPath';
import { MdContentCopy, MdDelete, MdEdit, MdSend } from 'react-icons/md';
import { BadVisual } from '../../components/examples/link';
import { ExampleContainer } from '../../components/examples';

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
          width={746}
          height={36}
          style={{
            width: `${746 / 16}rem`,
            height: `${36 / 16}rem`,
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

      <H3 as="h4">フォーム</H3>
      <NoLabel />
      <ExampleContainer>
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
      </ExampleContainer>
      <div style={{ marginTop: '1rem' }}>
        <Button
          onClick={() => {
            window.alert('送信しました');
          }}
          as="span"
          tabIndex={0}
        >
          送信
        </Button>
      </div>
    </>
  );
};

export default Practice;
