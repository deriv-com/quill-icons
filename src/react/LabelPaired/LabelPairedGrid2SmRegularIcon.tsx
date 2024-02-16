import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2SmRegularIcon = (
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
      <path d='M2.188 5.5q-.411.027-.438.438v2.625q.027.41.438.437h2.625q.41-.027.437-.437V5.937q-.027-.41-.437-.437zm-1.313.438q.027-.547.383-.93.382-.356.93-.383h2.625q.546.027.93.383.355.383.382.93v2.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H2.188a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93zM2.188 12.5q-.411.027-.438.438v2.624q.027.411.438.438h2.625q.41-.027.437-.437v-2.626q-.027-.41-.437-.437zm-1.313.438q.027-.548.383-.93.382-.356.93-.383h2.625q.546.027.93.383.355.383.382.93v2.624a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383H2.188a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93zM11.813 5.5H9.187q-.41.027-.437.438v2.625q.027.41.438.437h2.624q.411-.027.438-.437V5.937q-.027-.41-.437-.437m-2.626-.875h2.626q.546.027.93.383.355.383.382.93v2.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H9.189a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V5.938q.027-.547.383-.93.383-.356.93-.383m0 7.875q-.41.027-.437.438v2.624q.027.411.438.438h2.624q.411-.027.438-.437v-2.626q-.027-.41-.437-.437zm-1.312.438q.027-.548.383-.93.383-.356.93-.383h2.624q.548.027.93.383.356.383.383.93v2.624a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383H9.189a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93z' />
    </g>
    <defs>
      <clipPath id='56fef7d8d4d215decafdce727a358d09__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2SmRegularIcon);
export default ForwardRef;
