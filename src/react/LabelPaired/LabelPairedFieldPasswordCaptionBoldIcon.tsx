import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordCaptionBoldIcon = (
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
      <path d='M2.25 6.313a.925.925 0 0 0-.937.937v4.5c0 .54.398.938.937.938h10.5a.925.925 0 0 0 .938-.938v-4.5a.94.94 0 0 0-.938-.937zM.188 7.25c0-1.125.914-2.062 2.062-2.062h10.5a2.08 2.08 0 0 1 2.063 2.062v4.5a2.066 2.066 0 0 1-2.063 2.063H2.25A2.05 2.05 0 0 1 .188 11.75zm9.937 4.688a.54.54 0 0 1-.562-.563v-3.75c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562v3.75a.555.555 0 0 1-.563.563M4.688 9.5a.95.95 0 0 1-.47.82.95.95 0 0 1-.937 0c-.304-.164-.469-.468-.469-.82 0-.328.165-.633.47-.797a.95.95 0 0 1 .937 0 .94.94 0 0 1 .468.797m2.25 0a.95.95 0 0 1-.47.82.95.95 0 0 1-.937 0c-.304-.164-.468-.468-.468-.82 0-.328.164-.633.468-.797a.95.95 0 0 1 .938 0 .94.94 0 0 1 .468.797m2.25 0a.95.95 0 0 1-.47.82.95.95 0 0 1-.937 0c-.304-.164-.468-.468-.468-.82 0-.328.164-.633.468-.797a.95.95 0 0 1 .938 0 .94.94 0 0 1 .469.797' />
    </g>
    <defs>
      <clipPath id='6c2d2f7ba9f71e24681f0c46e05e26e4__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordCaptionBoldIcon);
export default ForwardRef;
