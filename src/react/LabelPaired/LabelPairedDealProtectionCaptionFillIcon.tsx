import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealProtectionCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.781 6.031h3.352c.328 0 .656.047.937.164s.516.282.727.492c.187.235.351.493.469.774.093.305.14.61.14.937 0 .352-.047.657-.14.961a2.7 2.7 0 0 1-.47.75c-.21.211-.444.375-.726.493-.28.117-.61.187-.937.187H9.89v2.274H7.78zm3.399 1.992c-.024-.023-.07-.07-.211-.07H9.89v.89h1.078c.14 0 .187-.023.21-.046.024-.024.071-.07.071-.188v-.398c0-.14-.047-.164-.047-.188zM4.242 6.031c.446 0 .89.07 1.266.211.398.164.75.375 1.031.68q.422.457.633 1.125c.14.445.21.937.21 1.5q0 .809-.21 1.476-.21.668-.633 1.125c-.281.305-.633.54-1.031.68-.375.14-.797.235-1.266.235H1.5V6.03zm.703 4.828c.14-.14.235-.375.235-.843v-.961c0-.47-.094-.703-.235-.844-.14-.14-.351-.234-.703-.234h-.61v3.117h.61c.352 0 .563-.094.703-.235' />
    </g>
    <defs>
      <clipPath id='1fbd80373c14d875d3a160c94afdeaca__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionCaptionFillIcon);
export default ForwardRef;
