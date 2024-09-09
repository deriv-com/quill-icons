import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.25A5.256 5.256 0 0 0 .75 9.5 5.24 5.24 0 0 0 6 14.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375-3.328 0-6-2.672-6-6 0-3.305 2.672-6 6-6 3.305 0 6 2.695 6 6v.563a2.066 2.066 0 0 1-2.062 2.062 2.05 2.05 0 0 1-1.829-1.078A2.59 2.59 0 0 1 6 12.125 2.62 2.62 0 0 1 3.375 9.5 2.636 2.636 0 0 1 6 6.875c.727 0 1.383.305 1.875.797v-.047c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.438a1.31 1.31 0 0 0 1.313 1.312c.703 0 1.312-.586 1.312-1.312V9.5c0-2.883-2.367-5.25-5.25-5.25M7.875 9.5c0-.656-.375-1.266-.937-1.617a1.91 1.91 0 0 0-1.875 0c-.586.351-.938.96-.938 1.617 0 .68.352 1.29.938 1.64.562.329 1.289.329 1.875 0 .562-.35.937-.96.937-1.64' />
    </g>
    <defs>
      <clipPath id='6d4b107a94b4d6b6e8cfc84180e02621__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtCaptionRegularIcon);
export default ForwardRef;
