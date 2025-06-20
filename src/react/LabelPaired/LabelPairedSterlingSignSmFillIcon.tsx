import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignSmFillIcon = (
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
      <path d='M3.188 8.152v1.723H6.25a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H3.188v1.23c0 .793-.22 1.56-.63 2.243l-.027.027H8a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H1c-.328 0-.629-.164-.766-.437a.84.84 0 0 1 0-.875l.82-1.368c.247-.41.383-.875.383-1.34v-1.23H1a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h.438V8.152c0-1.941 1.558-3.527 3.5-3.527.382 0 .738.082 1.12.191l2.215.739c.465.164.711.656.547 1.12a.903.903 0 0 1-1.093.548l-2.243-.739a1.8 1.8 0 0 0-.546-.109c-.985 0-1.75.793-1.75 1.777' />
    </g>
    <defs>
      <clipPath id='cc7e7b84f70ed2860acead8096675750__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignSmFillIcon);
export default ForwardRef;
