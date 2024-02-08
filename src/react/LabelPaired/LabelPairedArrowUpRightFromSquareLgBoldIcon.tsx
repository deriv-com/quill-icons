import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.875 6.438q.078-.86.938-.938h6.25q.858.078.937.938v6.25q-.078.858-.937.937-.86-.079-.938-.937V8.703l-8.71 8.711q-.665.547-1.33 0-.546-.664 0-1.328l8.712-8.711h-3.985q-.858-.078-.937-.937m-9.062.312h5q.858.078.937.938-.078.858-.937.937h-5q-.86.078-.938.938v13.125q.078.858.938.937h13.125q.858-.079.937-.937v-5q.078-.86.938-.938.858.078.937.938v5q-.04 1.21-.82 1.992-.781.78-1.992.82H2.813Q1.6 25.46.82 24.68q-.78-.781-.82-1.992V9.563Q.04 8.35.82 7.57q.781-.78 1.993-.82' />
    </g>
    <defs>
      <clipPath id='667de5c1d0d6daa4bf324a244fb4bc32__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareLgBoldIcon);
export default ForwardRef;
