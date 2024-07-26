import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AccountsDmt5FinancialIcon = (
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
    <g clipPath='url(#6d627e80b617e193c490b3ac97efd8f2__a)'>
      <path fill='#0364B9' d='M26 0H6a6 6 0 0 0-6 6v17.5h32V6a6 6 0 0 0-6-6' />
      <path
        fill='#0A559E'
        d='M6 0a6 6 0 0 0-6 6v.174l29.914-4.721A5.98 5.98 0 0 0 26 0zM32 6c0-1.504-.553-2.88-1.468-3.933L26.602 23.5H32z'
      />
      <path fill='#71BD0E' d='M0 23h32v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z' />
      <path
        fill='#fff'
        d='M7.342 9.684q.216.396.492.984.288.576.588 1.26.312.672.612 1.38l.564 1.332.564-1.332q.3-.708.6-1.38.312-.684.588-1.26.288-.588.504-.984h1.704q.12.828.216 1.86.108 1.02.18 2.136.084 1.104.144 2.22.072 1.116.12 2.1h-1.824q-.036-1.212-.096-2.64t-.18-2.88a518 518 0 0 1-1.008 2.34 109 109 0 0 1-.9 2.124H8.902q-.168-.396-.408-.948-.24-.564-.504-1.176-.252-.612-.516-1.224l-.48-1.116q-.12 1.452-.18 2.88T6.718 18H4.894q.048-.984.108-2.1l.144-2.22q.084-1.116.18-2.136.108-1.032.228-1.86zM21.355 9.684v1.596h-2.508V18h-1.872v-6.72h-2.508V9.684zM25.318 15.552a1.2 1.2 0 0 0-.156-.612q-.156-.276-.54-.456t-1.032-.276a11.5 11.5 0 0 0-1.632-.096q.132-1.116.216-2.268t.132-2.16h4.5v1.5h-3q-.024.432-.06.84-.024.396-.06.696 1.752.12 2.58.828.84.696.84 1.944 0 .576-.204 1.068t-.612.852a2.9 2.9 0 0 1-1.032.564q-.612.204-1.44.204-.324 0-.684-.048a6 6 0 0 1-.684-.108 7 7 0 0 1-.588-.132 2.3 2.3 0 0 1-.408-.144l.324-1.476q.3.132.792.264.492.12 1.176.12.828 0 1.2-.324.372-.336.372-.78M11.54 29.58V25.42h2.784v.786h-1.848v.87h1.644v.786h-1.644v1.716zM14.986 25.421h.935v4.158h-.935zM19.674 29.58a21 21 0 0 0-.87-1.41 14 14 0 0 0-.996-1.315v2.724h-.924v-4.158h.762q.198.198.438.486t.486.618q.252.324.498.678.246.348.462.672v-2.454h.93v4.158z'
      />
    </g>
    <defs>
      <clipPath id='6d627e80b617e193c490b3ac97efd8f2__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(AccountsDmt5FinancialIcon);
export default ForwardRef;
