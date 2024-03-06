import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsSmRegularIcon = (
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
      <path d='M13.89 15.836q-.273.3-.6.055l-4.157-3.528q-.3-.3-.055-.629.273-.273.602-.027l4.156 3.527q.3.274.055.602m-6.042-5.66 5.441-4.567q.329-.245.602.055.246.329-.055.602l-8.121 6.863q.41.684.41 1.559-.027 1.312-.902 2.16-.848.875-2.16.902-1.314-.027-2.16-.902Q.026 16 0 14.688q.027-1.314.902-2.16.847-.876 2.16-.903 1.23.027 2.079.82l2.023-1.695-2.023-1.695q-.848.793-2.078.82-1.314-.027-2.16-.902Q.026 8.125 0 6.813.027 5.5.902 4.653q.847-.876 2.16-.903 1.314.027 2.16.902.876.848.903 2.16a2.97 2.97 0 0 1-.41 1.56zM3.063 9q1.23-.027 1.886-1.094.601-1.094 0-2.187-.656-1.067-1.886-1.094-1.23.027-1.887 1.094-.601 1.094 0 2.187Q1.832 8.973 3.063 9m0 3.5q-1.23.027-1.887 1.094-.601 1.093 0 2.187.656 1.067 1.887 1.094 1.23-.027 1.886-1.094.601-1.093 0-2.187-.656-1.067-1.886-1.094' />
    </g>
    <defs>
      <clipPath id='68af0afb796f0b61a79aaccf3c32a286__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsSmRegularIcon);
export default ForwardRef;
