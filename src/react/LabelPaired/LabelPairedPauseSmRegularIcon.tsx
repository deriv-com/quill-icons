import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 6.375q-.411.027-.438.438v7.875q.027.41.438.437H2.75q.41-.027.438-.437V6.812q-.029-.41-.438-.437zm-1.313.438q.027-.547.383-.93.382-.356.93-.383H2.75q.547.027.93.383.355.383.382.93v7.875a1.43 1.43 0 0 1-.382.93 1.43 1.43 0 0 1-.93.382H1.438a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93zm6.125-.438q-.41.027-.437.438v7.875q.027.41.437.437h1.313q.41-.027.437-.437V6.812q-.027-.41-.437-.437zm-1.312.438q.027-.547.382-.93.383-.356.93-.383h1.313q.546.027.93.383.355.383.382.93v7.875a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H6.25a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93z' />
    </g>
    <defs>
      <clipPath id='4bcec8b35c33bc86__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseSmRegularIcon);
export default ForwardRef;
