import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6 6.336-.21-.375q-.26-.352-.657-.164-.353.258-.164.656l.468.844-1.546 2.695H2.67q-.444.047-.491.492.046.422.492.47h4.336a.65.65 0 0 0 0-.634q-.165-.304-.54-.328H4.993l2.04-3.539q.187-.399-.165-.656-.398-.187-.656.164zm-1.852 5.11q-.375-.446-.937-.282l-.352.61q-.187.398.188.632.398.187.656-.164zM8.11 9.991a3 3 0 0 1-.117-.21Q7.15 8.304 6.703 7.554q-.234.188-.351.633-.094.468.187.984.281.492.68 1.195.468.797 1.078 1.875.258.353.656.164.352-.234.188-.656l-.47-.797h.68q.445-.046.493-.469-.047-.444-.492-.492zM6 3.687q1.617.024 2.93.797a5.8 5.8 0 0 1 2.086 2.086q.772 1.313.797 2.93-.024 1.617-.797 2.93a5.8 5.8 0 0 1-2.086 2.086q-1.313.772-2.93.797-1.617-.024-2.93-.797A5.8 5.8 0 0 1 .984 12.43Q.212 11.117.188 9.5.21 7.883.984 6.57A5.8 5.8 0 0 1 3.07 4.484Q4.383 3.712 6 3.688M11.063 9.5q-.048-2.156-1.477-3.586Q8.133 4.484 6 4.438q-2.156.046-3.586 1.476Q.984 7.367.937 9.5q.048 2.157 1.477 3.586Q3.867 14.516 6 14.562q2.157-.046 3.586-1.476 1.43-1.453 1.476-3.586' />
    </g>
    <defs>
      <clipPath id='ec1de28a050374ebbf320d58a38dad70__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreCaptionIcon);
export default ForwardRef;
