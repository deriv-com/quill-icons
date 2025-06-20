import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeXlRegularIcon = (
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
      <path d='M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m7.5-4.5h9c.797 0 1.5.703 1.5 1.5v6c0 .844-.703 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 6 21v-6c0-.797.656-1.5 1.5-1.5m9 2.297V15h-9v.797L11.625 18a.9.9 0 0 0 .375.094.9.9 0 0 0 .328-.094zm0 1.687-3.469 1.828a2.14 2.14 0 0 1-1.031.282c-.375 0-.75-.094-1.078-.282L7.5 17.485V21h9z' />
    </g>
    <defs>
      <clipPath id='2ed2650b787ac4b131bbbe8e2954c057__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeXlRegularIcon);
export default ForwardRef;
