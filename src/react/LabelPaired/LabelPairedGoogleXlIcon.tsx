import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGoogleXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={36}
    viewBox='0 0 23 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.938 18.281c0 6.657-4.547 11.344-11.25 11.344A11.564 11.564 0 0 1 .063 18 11.593 11.593 0 0 1 11.688 6.375c3.093 0 5.765 1.172 7.78 3.047l-3.187 3.047C12.156 8.484 4.47 11.484 4.47 18c0 4.078 3.234 7.36 7.219 7.36 4.593 0 6.328-3.282 6.562-5.016h-6.562v-3.985H22.75c.094.61.188 1.172.188 1.922' />
    </g>
    <defs>
      <clipPath id='6285ef596c89fc307ba01ba9427de313__a'>
        <path d='M0 0h23v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleXlIcon);
export default ForwardRef;
