import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourLgFillIcon = (
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
      <path d='M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m8.71-4.922c-.468-.195-1.015.078-1.17.586L5.663 16.79c-.117.273-.039.586.117.82.196.274.469.391.782.391h4.062v1.563c0 .546.39.937.938.937.507 0 .937-.39.937-.937V18h.313c.507 0 .937-.39.937-.937a.95.95 0 0 0-.937-.938H12.5v-2.187a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938v2.187H7.852l1.445-4.375c.195-.508-.078-1.016-.586-1.172' />
    </g>
    <defs>
      <clipPath id='8fbcee67df84d0f1f605e37ea0e040aa__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourLgFillIcon);
export default ForwardRef;
