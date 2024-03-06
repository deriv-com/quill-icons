import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareLgBoldIcon = (
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
      <path d='m10.664 5.773 4.375 4.375q.548.664 0 1.329-.664.546-1.328 0l-2.774-2.774v9.61q-.078.858-.937.937-.86-.078-.937-.937v-9.61l-2.774 2.774q-.664.546-1.328 0-.548-.664 0-1.329l4.375-4.375q.664-.546 1.328 0m-7.851.977h.312q.859.078.938.938-.079.858-.938.937h-.312q-.86.078-.938.938v13.125q.078.858.938.937h14.375q.858-.079.937-.937V9.563q-.078-.86-.937-.938h-.313q-.86-.078-.937-.937.078-.86.937-.938h.313q1.21.04 1.992.82.78.782.82 1.992v13.126q-.04 1.21-.82 1.992-.781.78-1.992.82H2.813Q1.6 25.46.82 24.68q-.78-.781-.82-1.992V9.563Q.04 8.35.82 7.57q.781-.78 1.993-.82' />
    </g>
    <defs>
      <clipPath id='7c99872969ae98dd345a851a58e6cb3c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareLgBoldIcon);
export default ForwardRef;
