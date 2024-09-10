import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneXlRegularIcon = (
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
      <path d='M3 28.5h10.5c.797 0 1.5-.656 1.5-1.5v-3h1.5v3c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V16.5c0-1.64 1.313-3 3-3h3V15H3c-.844 0-1.5.703-1.5 1.5V27c0 .844.656 1.5 1.5 1.5m7.5-7.5H21c.797 0 1.5-.656 1.5-1.5V9c0-.797-.703-1.5-1.5-1.5H10.5C9.656 7.5 9 8.203 9 9v10.5c0 .844.656 1.5 1.5 1.5m-3-1.5V9c0-1.64 1.313-3 3-3H21c1.64 0 3 1.36 3 3v10.5c0 1.688-1.36 3-3 3H10.5c-1.687 0-3-1.312-3-3' />
    </g>
    <defs>
      <clipPath id='2f756319f3a8f76a7c29ca8fa9b30208__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneXlRegularIcon);
export default ForwardRef;
