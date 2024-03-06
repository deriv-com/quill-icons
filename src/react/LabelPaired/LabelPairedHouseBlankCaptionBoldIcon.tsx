import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.375 3.64 6.188 5.25q.351.352.046.797-.351.352-.773.047l-.586-.468v4.359q-.023.797-.54 1.336-.538.515-1.335.539h-6.75q-.797-.023-1.336-.54-.515-.538-.539-1.335v-4.36l-.586.47q-.422.304-.773-.047-.305-.446.046-.797l6.188-5.25q.375-.282.75 0m3.75 4.665L7 4.813 2.875 8.305v5.32q0 .328.21.54.212.21.54.21h6.75a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54z' />
    </g>
    <defs>
      <clipPath id='61f3f577f8eba835ba32b75fad28a132__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankCaptionBoldIcon);
export default ForwardRef;
