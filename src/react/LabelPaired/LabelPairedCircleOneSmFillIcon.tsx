import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleOneSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.328-3.39c-.219-.137-.465-.137-.656 0l-1.531.874a.613.613 0 0 0-.246.875.613.613 0 0 0 .875.246l.574-.3v3.883H5.25c-.383 0-.656.3-.656.656 0 .383.273.656.656.656h3.5a.65.65 0 0 0 .656-.656c0-.356-.3-.656-.656-.656H7.656V7.906a.66.66 0 0 0-.328-.547' />
    </g>
    <defs>
      <clipPath id='f232980ca0e8d4b87b190073416984aa__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleOneSmFillIcon);
export default ForwardRef;
