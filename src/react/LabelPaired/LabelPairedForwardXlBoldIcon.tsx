import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardXlBoldIcon = (
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
      <path d='M10.5 10.406c0-.75.61-1.406 1.406-1.406.281 0 .563.094.797.281l10.828 7.828c.282.235.469.563.469.891 0 .375-.187.703-.469.938l-10.828 7.828a1.6 1.6 0 0 1-.797.234c-.797 0-1.406-.61-1.406-1.406v-4.64l-8.297 5.812c-.234.187-.515.234-.797.234C.61 27 0 26.39 0 25.594v-15.14C0 9.655.61 9 1.406 9c.282 0 .563.094.797.281l8.297 5.813zm0 7.406-8.25-5.765V24l8.25-5.766zM20.953 18l-8.203-5.906v11.86z' />
    </g>
    <defs>
      <clipPath id='6b3c717f47aec090e3f4f8f1184447c2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardXlBoldIcon);
export default ForwardRef;
