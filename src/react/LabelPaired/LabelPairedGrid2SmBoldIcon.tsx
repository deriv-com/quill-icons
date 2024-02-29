import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2SmBoldIcon = (
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
      <path d='M2.188 5.938v2.625h2.625V5.937zm-1.313 0q.027-.547.383-.93.382-.356.93-.383h2.625q.546.027.93.383.355.383.382.93v2.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H2.188a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93zm1.313 7v2.624h2.625v-2.624zm-1.313 0q.027-.548.383-.93.382-.356.93-.383h2.625q.546.027.93.383.355.383.382.93v2.624a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383H2.188a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93zm10.938-7H9.187v2.625h2.626zM9.187 4.625h2.626q.546.027.93.383.355.383.382.93v2.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H9.189a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V5.938q.027-.547.383-.93.383-.356.93-.383m0 8.313v2.624h2.626v-2.624zm-1.312 0q.027-.548.383-.93.383-.356.93-.383h2.624q.548.027.93.383.356.383.383.93v2.624a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383H9.189a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93z' />
    </g>
    <defs>
      <clipPath id='5329fa567a55e5b9158e260d888e4c85__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2SmBoldIcon);
export default ForwardRef;
