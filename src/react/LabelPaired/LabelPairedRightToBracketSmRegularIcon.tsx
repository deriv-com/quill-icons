import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketSmRegularIcon = (
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
      <path d='M8.723 10.805q.027-.027.027-.055t-.027-.055l-3.61-3.39q-.054-.055-.11-.055a.214.214 0 0 0-.19.191V9q-.029.41-.438.438H1.094q-.191.027-.219.218v2.188q.027.19.219.219h3.281q.41.027.438.437v1.559q.027.164.19.191.056 0 .11-.055zm.902-.055q0 .41-.3.684l-3.61 3.418q-.3.273-.711.273-.465 0-.766-.3-.3-.302-.3-.766v-1.121H1.094a1 1 0 0 1-.766-.329A1 1 0 0 1 0 11.844V9.656q0-.465.328-.765a1 1 0 0 1 .766-.328h2.843V7.44q0-.465.301-.765.3-.3.766-.301.41 0 .71.3l3.61 3.391q.3.274.301.684M9.188 16h2.624q.548-.027.93-.383.356-.383.383-.93V6.814a1.43 1.43 0 0 0-.383-.93 1.43 1.43 0 0 0-.93-.383H9.189q-.411-.027-.438-.437.027-.411.438-.438h2.624q.93.027 1.56.629.6.63.628 1.559v7.875q-.027.93-.629 1.558-.63.601-1.559.629H9.189q-.411-.027-.438-.437.027-.411.438-.438' />
    </g>
    <defs>
      <clipPath id='01dac2ccf5cdb3cf46c6dff71367207c__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketSmRegularIcon);
export default ForwardRef;
