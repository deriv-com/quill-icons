import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardLgBoldIcon = (
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
      <path d='M11.25 9.172v3.867l6.914-4.844Q18.437 8 18.828 8q.508 0 .82.352.352.312.352.82v12.656q0 .508-.352.82-.312.352-.82.352-.352 0-.664-.195L11.25 17.96v3.867q0 .508-.352.82-.312.352-.82.352-.39 0-.703-.234L.391 16.242A.86.86 0 0 1 0 15.5q0-.468.39-.742l8.985-6.524Q9.688 8 10.078 8q.508 0 .82.352.352.312.352.82m0 6.172v.312l6.875 4.844v-9.96zm-8.71.156 6.835 4.96v-9.92z' />
    </g>
    <defs>
      <clipPath id='5d5efdbc1755001ffac475372d821269__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardLgBoldIcon);
export default ForwardRef;
