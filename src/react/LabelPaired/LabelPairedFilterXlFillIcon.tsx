import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.14 8.578A1.93 1.93 0 0 1 1.876 7.5h20.25c.703 0 1.36.422 1.688 1.078a1.97 1.97 0 0 1-.282 2.016L15 21.047V27c0 .61-.328 1.125-.844 1.36a1.62 1.62 0 0 1-1.594-.141l-3-2.25C9.189 25.687 9 25.266 9 24.75v-3.703L.422 10.594A1.97 1.97 0 0 1 .14 8.578' />
    </g>
    <defs>
      <clipPath id='fae86a520d90c0df2d36f6da51c53ee1__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterXlFillIcon);
export default ForwardRef;
