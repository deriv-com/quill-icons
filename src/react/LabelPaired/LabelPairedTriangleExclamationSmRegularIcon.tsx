import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationSmRegularIcon = (
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
      <path d='M.93 15.262c-.055.082-.055.164-.055.246 0 .273.219.52.492.52h11.238c.274 0 .52-.247.52-.52a.44.44 0 0 0-.082-.246L7.547 5.828A.66.66 0 0 0 7 5.5a.67.67 0 0 0-.574.328zm-.766-.438L5.66 5.391A1.57 1.57 0 0 1 7 4.625c.52 0 1.04.3 1.313.766l5.496 9.433c.109.192.191.438.191.684 0 .765-.629 1.367-1.395 1.367H1.367A1.354 1.354 0 0 1 0 15.508c0-.246.055-.492.164-.684M7 8.125a.47.47 0 0 1 .438.438v3.5A.45.45 0 0 1 7 12.5a.43.43 0 0 1-.437-.437v-3.5A.45.45 0 0 1 7 8.124m-.656 6.125c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656' />
    </g>
    <defs>
      <clipPath id='b6ed544cba185f922228c303d0b20366__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationSmRegularIcon);
export default ForwardRef;
