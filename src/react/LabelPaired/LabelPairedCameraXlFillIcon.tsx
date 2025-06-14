import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraXlFillIcon = (
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
      <path d='M6.984 9.047A2.22 2.22 0 0 1 9.094 7.5h5.765c.985 0 1.829.656 2.11 1.547l.515 1.453H21c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-12c0-1.64 1.313-3 3-3h3.469zM12 15c-1.64 0-3.094.89-3.937 2.25-.797 1.406-.797 3.14 0 4.5C8.906 23.156 10.359 24 12 24c1.594 0 3.047-.844 3.89-2.25.797-1.36.797-3.094 0-4.5C15.048 15.89 13.595 15 12 15' />
    </g>
    <defs>
      <clipPath id='6d4d1f3d584fecba084857792f195446__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraXlFillIcon);
export default ForwardRef;
