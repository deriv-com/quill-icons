import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeLgRegularIcon = (
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
      <path d='M2.5 9.25c-.703 0-1.25.586-1.25 1.25v1.563l7.617 5.624a1.94 1.94 0 0 0 2.227 0l7.656-5.625V10.5c0-.664-.586-1.25-1.25-1.25zm-1.25 4.375V20.5c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25v-6.875l-6.914 5.078a3.23 3.23 0 0 1-3.711 0zM0 10.5C0 9.133 1.094 8 2.5 8h15c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 0 20.5z' />
    </g>
    <defs>
      <clipPath id='aacfad0a9185103a380cba6920b2cc4f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeLgRegularIcon);
export default ForwardRef;
