import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyFilIcon = (
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
    <g clipPath='url(#e8bb8b523637b1022906d8fb9cd665f8__a)'>
      <path
        fill='#0090FF'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='m17.585 14.456-.395 2.11 3.758.527-.264.99-3.692-.528c-.264.857-.396 1.78-.725 2.571-.33.924-.66 1.847-1.056 2.704-.527 1.12-1.45 1.912-2.703 2.11-.725.132-1.517.066-2.11-.396-.198-.131-.396-.395-.396-.593 0-.264.132-.593.33-.725.132-.066.462 0 .66.066.197.197.395.461.527.725.396.527.923.593 1.45.198.594-.528.924-1.253 1.122-1.979.395-1.582.79-3.099 1.12-4.681v-.264l-3.494-.527.132-.99 3.626.528.462-2.044-3.759-.594.132-1.055 3.89.528c.133-.396.198-.726.33-1.055.33-1.187.66-2.374 1.451-3.429s1.714-1.714 3.1-1.648c.593 0 1.186.197 1.582.659.066.066.197.198.197.33 0 .263 0 .593-.197.79-.264.199-.594.133-.858-.131-.197-.198-.33-.396-.527-.593-.396-.528-.99-.594-1.45-.132-.33.33-.66.79-.858 1.253-.461 1.384-.791 2.835-1.253 4.286l3.627.527-.264.99z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='e8bb8b523637b1022906d8fb9cd665f8__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyFilIcon);
export default ForwardRef;
