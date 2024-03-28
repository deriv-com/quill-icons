import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={24}
    viewBox='0 0 6 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1M.5 9.5c0-.25.219-.5.5-.5h2c.25 0 .5.25.5.5V18h2c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h2v-8H1a.494.494 0 0 1-.5-.5' />
    </g>
    <defs>
      <clipPath id='38d371777afa2d905d07a7c7371b4610__a'>
        <path d='M0 0h6v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoMdRegularIcon);
export default ForwardRef;
