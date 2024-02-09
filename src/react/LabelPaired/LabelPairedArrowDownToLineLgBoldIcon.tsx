import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.063 24.25H.938q-.86-.079-.938-.937.078-.86.938-.938h13.125q.858.078.937.938-.079.858-.937.937m-7.227-5.312v.039l-5-5.313q-.547-.703.039-1.328.664-.548 1.328.039l3.36 3.594V7.688q.078-.86.937-.938.859.078.938.938v8.28l3.398-3.593q.626-.586 1.328-.04.547.626.04 1.29l-5 5.313q-.315.312-.704.312a.85.85 0 0 1-.664-.312' />
    </g>
    <defs>
      <clipPath id='58231eba82322663631083cc6aaacf67__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineLgBoldIcon);
export default ForwardRef;
