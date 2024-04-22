import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardXlRegularIcon = (
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
      <path d='M22.219 18 12 10.594v14.86zM11.906 9c.281 0 .563.094.797.281l10.828 7.828c.282.235.469.563.469.891 0 .375-.187.703-.469.938l-10.828 7.828a1.6 1.6 0 0 1-.797.234c-.797 0-1.406-.61-1.406-1.406v-4.828l-8.297 6a1.6 1.6 0 0 1-.797.234C.61 27 0 26.39 0 25.594V10.406C0 9.656.61 9 1.406 9c.282 0 .563.094.797.281l8.297 6v-4.875c0-.75.61-1.406 1.406-1.406M10.5 18.938v-1.829l-9-6.515v14.86z' />
    </g>
    <defs>
      <clipPath id='3dfe676c9aef3cda1d9a8d23eb95beb2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardXlRegularIcon);
export default ForwardRef;
