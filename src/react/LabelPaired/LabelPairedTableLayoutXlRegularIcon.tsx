import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTableLayoutXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21 9H3c-.844 0-1.5.703-1.5 1.5v3h21v-3c0-.797-.703-1.5-1.5-1.5M1.5 25.5c0 .844.656 1.5 1.5 1.5h4.5V15h-6zM9 27h12c.797 0 1.5-.656 1.5-1.5V15H9zM3 7.5h18c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3' />
    </g>
    <defs>
      <clipPath id='981a0718f75e44c1d0c98e47290f0159__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutXlRegularIcon);
export default ForwardRef;
