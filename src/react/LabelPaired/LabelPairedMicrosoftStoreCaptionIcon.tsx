import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrosoftStoreCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.145 6.5V5.164c0-.82.421-1.078 1.218-1.266 1.196-.28 1.266.493 1.266.985v1.125l.305-.047V4.906c0-.937-.305-1.617-1.618-1.312-.726.14-1.453.328-1.453 1.547v1.43zm3.07-1.852c-.024-.117-.047-.21-.047-.304.914-.117 1.078.14 1.078 1.172v.187l-.281.047v-.281c0-.633 0-.938-.75-.82M6.457 5.797c0-.938.375-1.078.844-1.242.023.093.047.187.047.304-.422.188-.586.305-.586.938v.398l-.305.047zM2.66 7.367 10.7 5.75l1.616.586v7.875l-1.617.586-8.039-1.594zm1.735 4.383 1.78.234v-1.71h-1.78zm0-1.71h1.78V8.421l-1.78.258zm2.015 1.968 2.25.328v-2.063H6.41zm0-1.969h2.25V8.094l-2.25.328z' />
    </g>
    <defs>
      <clipPath id='284f406b679c8fa93f7ff3df26396164__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrosoftStoreCaptionIcon);
export default ForwardRef;
