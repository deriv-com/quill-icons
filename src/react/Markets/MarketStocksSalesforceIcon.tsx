import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksSalesforceIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#885615d4f3ae6f8108ea1b19fcadc37e__a)'>
      <path
        fill='#169BD7'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M18.28 13.237q.052.01.104.026c.008 0 .043.018.026.071l-.14.394c-.008.027-.017.045-.078.027-.017-.009-.035-.018-.096-.027a.7.7 0 0 0-.349.009.36.36 0 0 0-.177.123c-.04.048-.088.105-.11.181-.07.206-.096.412-.096.43h.593c.052 0 .07.027.06.063l-.07.393c-.008.054-.06.054-.06.054h-.61l-.419 2.417c-.044.25-.105.465-.166.635-.07.17-.14.296-.244.421a.8.8 0 0 1-.34.242c-.13.044-.288.071-.453.071-.079 0-.166 0-.27-.027a1 1 0 0 1-.128-.04l-.038-.013c-.018-.01-.035-.036-.026-.072.01-.022.056-.152.093-.256l.046-.129c.026-.044.07-.027.07-.027a.24.24 0 0 0 .096.036 1 1 0 0 0 .148.018.8.8 0 0 0 .218-.036.35.35 0 0 0 .166-.134 1 1 0 0 0 .13-.268c.044-.117.079-.278.114-.466l.41-2.372h-.41c-.053 0-.07-.027-.061-.062l.07-.394c.008-.054.06-.054.06-.054h.42l.025-.125c.07-.376.192-.672.375-.86s.454-.286.785-.286c.096 0 .183.009.253.018zM10.075 17.416a.05.05 0 0 0 .052-.054v-4.046c0-.027-.017-.053-.052-.053h-.488q-.053 0-.053.053v4.046c0 .027.018.054.053.054zM4.018 17.143c-.01-.008-.027-.022-.012-.067l.13-.367c.026-.06.066-.039.085-.029l.003.002c.035.027.06.045.104.071.384.251.733.251.846.251.288 0 .462-.161.462-.367v-.009c0-.224-.27-.313-.584-.412l-.07-.018c-.427-.125-.889-.304-.889-.868v-.009c0-.537.419-.904 1.02-.904h.061c.349 0 .689.108.933.26.026.009.044.036.035.072-.004.017-.035.1-.065.183s-.061.166-.066.184c-.026.062-.087.017-.087.017a1.9 1.9 0 0 0-.828-.214c-.253 0-.419.134-.419.322v.009c0 .22.271.31.588.416l.014.004.052.018c.427.143.89.34.89.868v.01c0 .572-.41.93-1.064.93-.323 0-.628-.053-.95-.232-.062-.036-.123-.072-.184-.117z'
      />
      <path
        fill='#fff'
        d='M13.583 17.143c-.01-.008-.027-.022-.013-.067l.123-.367c.017-.054.078-.036.087-.027.035.027.06.045.104.071.384.251.733.251.846.251.288 0 .462-.161.462-.367v-.009c0-.224-.27-.313-.584-.412l-.07-.018c-.427-.125-.89-.304-.89-.868v-.009c0-.537.42-.904 1.021-.904h.07c.348 0 .688.108.933.26.026.009.043.036.034.072-.004.017-.034.1-.065.183-.03.083-.06.166-.065.184-.026.062-.088.017-.088.017a1.9 1.9 0 0 0-.828-.214c-.253 0-.418.134-.418.322v.009c0 .22.27.31.587.416l.014.004.053.018c.427.143.889.34.889.868v.01c0 .572-.41.93-1.064.93-.322 0-.627-.053-.95-.232-.061-.036-.122-.072-.183-.117z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M20.406 14.865c.105.134.192.295.244.483.061.188.087.385.087.6s-.026.412-.078.6c-.052.179-.131.349-.244.483a1.3 1.3 0 0 1-.419.322c-.165.08-.366.116-.584.116a1.34 1.34 0 0 1-.584-.116 1.16 1.16 0 0 1-.419-.322 1.3 1.3 0 0 1-.252-.483 2.2 2.2 0 0 1-.079-.6c0-.215.026-.412.079-.6.052-.179.13-.349.244-.483.113-.143.252-.25.418-.331.166-.072.366-.117.584-.117s.419.036.584.117c.166.08.306.197.419.33m-.47 1.844c.113-.18.174-.439.174-.761s-.061-.582-.175-.76q-.168-.258-.532-.26c-.244 0-.418.08-.532.26-.113.178-.174.438-.174.76s.061.582.174.76c.114.18.288.27.532.27q.364 0 .532-.27'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M25.062 16.852s.052-.018.07.036l.139.367c.017.044-.026.062-.026.062a2.3 2.3 0 0 1-.776.143c-.48 0-.837-.143-1.081-.42q-.366-.418-.366-1.119c0-.215.026-.412.087-.6.052-.179.148-.349.261-.483.114-.143.262-.25.436-.331.175-.08.384-.117.61-.117.157 0 .288.01.41.027.131.027.297.072.366.099.018 0 .053.018.035.062-.026.092-.052.164-.078.236l-.052.15c-.018.053-.061.035-.061.035a1.9 1.9 0 0 0-.576-.08c-.27 0-.47.098-.601.277s-.21.42-.21.734c0 .349.087.609.236.77q.236.24.627.241c.105 0 .21 0 .297-.017a1 1 0 0 0 .21-.057z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M27.695 14.793c.078.09.192.269.235.448.09.342.07.644.063.758a.2.2 0 0 0-.002.047c0 .054-.052.054-.052.054h-1.848c.017.295.078.492.217.635.131.135.34.224.628.224.413 0 .607-.08.738-.134l.02-.009s.053-.018.07.036l.123.349c.026.054 0 .08-.018.09-.122.062-.4.187-.933.187a1.7 1.7 0 0 1-.671-.107 1.2 1.2 0 0 1-.462-.313 1.2 1.2 0 0 1-.27-.484 2 2 0 0 1-.088-.608q0-.324.079-.609a1.4 1.4 0 0 1 .253-.492c.113-.134.253-.25.427-.331.174-.09.384-.126.61-.126.2 0 .384.045.532.108q.168.078.349.277m-1.456.394c-.07.116-.122.269-.148.448h1.316c-.009-.17-.044-.332-.122-.448a.56.56 0 0 0-.514-.277c-.245 0-.419.098-.532.277M12.899 14.793c.079.09.192.269.235.448.09.342.07.644.063.758a.2.2 0 0 0-.002.047c0 .054-.052.054-.052.054h-1.848c.017.295.078.492.218.635.13.135.34.224.627.224.414 0 .608-.08.738-.134l.021-.009s.052-.018.07.036l.122.349c.026.054 0 .08-.018.09-.122.062-.4.187-.933.187a1.7 1.7 0 0 1-.67-.107 1.2 1.2 0 0 1-.463-.313 1.2 1.2 0 0 1-.27-.484 2 2 0 0 1-.087-.608q0-.324.078-.609a1.4 1.4 0 0 1 .253-.492c.113-.134.253-.25.427-.331.175-.09.384-.126.61-.126.201 0 .384.045.532.108.114.053.227.143.349.277m-1.456.394c-.07.116-.122.269-.148.448h1.316c-.017-.17-.043-.332-.122-.448a.56.56 0 0 0-.514-.277c-.244 0-.419.098-.532.277M7.746 15.536c.114 0 .21 0 .288.01 0 0 .148.017.296.026v-.08c0-.251-.043-.368-.148-.448-.096-.08-.253-.125-.453-.125 0 0-.445 0-.802.197l-.026.017s-.044.018-.062-.026l-.13-.358c-.018-.045.017-.072.017-.072.166-.134.567-.215.567-.215.14-.027.357-.045.497-.045.366 0 .654.09.846.26.2.179.296.465.296.841v1.737s0 .053-.044.062a1 1 0 0 1-.13.036c-.043.006-.161.03-.29.056q-.088.016-.172.034a4 4 0 0 1-.558.044c-.184 0-.34-.017-.489-.053a1 1 0 0 1-.375-.17.7.7 0 0 1-.244-.296.9.9 0 0 1-.087-.43c0-.17.035-.313.096-.438a.9.9 0 0 1 .27-.313 1 1 0 0 1 .384-.188c.14-.045.296-.063.453-.063m-.55 1.226a.4.4 0 0 0 .106.117s.165.134.54.107c.262-.018.497-.072.497-.072v-.859s-.235-.044-.497-.044c-.375-.01-.532.134-.532.134-.113.08-.165.197-.165.367q0 .159.052.25'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M22.914 14.503c.012.01.035.028.02.066a3 3 0 0 1-.148.385c-.017.036-.035.054-.07.054 0 0-.104-.027-.2-.027a1 1 0 0 0-.244.036.7.7 0 0 0-.227.143.7.7 0 0 0-.166.278 1.7 1.7 0 0 0-.06.5v1.415c0 .027-.018.054-.053.054h-.488a.05.05 0 0 1-.052-.054v-2.828c0-.027.017-.054.052-.054h.47a.05.05 0 0 1 .053.054v.232a.94.94 0 0 1 .793-.313c.122.01.28.045.314.054z'
      />
    </g>
    <defs>
      <clipPath id='885615d4f3ae6f8108ea1b19fcadc37e__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksSalesforceIcon);
export default ForwardRef;
