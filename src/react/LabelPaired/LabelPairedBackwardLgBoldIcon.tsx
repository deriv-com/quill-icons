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
      <path d='M11.25 9.172v3.906l6.875-4.844A1.06 1.06 0 0 1 18.789 8C19.453 8 20 8.547 20 9.21v12.618c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.04-.703-.195l-6.914-4.844v3.867A1.15 1.15 0 0 1 10.039 23c-.234 0-.469-.078-.664-.195L.352 16.28A.98.98 0 0 1 0 15.5c0-.273.117-.547.352-.742l9.023-6.524A1.1 1.1 0 0 1 10.078 8c.625 0 1.172.547 1.172 1.172m0 6.172v.351l6.875 4.805v-9.96zM2.5 15.5l6.875 4.96v-9.882z' />
    </g>
    <defs>
      <clipPath id='7813b49a0f4f2ae7f1b1325ed103a570__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardLgBoldIcon);
export default ForwardRef;
