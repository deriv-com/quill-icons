import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordCaptionFillIcon = (
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
      <path d='M2.25 6.5a.755.755 0 0 0-.75.75v4.5c0 .422.328.75.75.75h10.5c.398 0 .75-.328.75-.75v-4.5a.77.77 0 0 0-.75-.75zM0 7.25A2.25 2.25 0 0 1 2.25 5h10.5A2.25 2.25 0 0 1 15 7.25v4.5A2.25 2.25 0 0 1 12.75 14H2.25A2.25 2.25 0 0 1 0 11.75zm10.125 4.688a.54.54 0 0 1-.562-.563v-3.75c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562v3.75a.555.555 0 0 1-.563.563M4.688 9.5a.95.95 0 0 1-.47.82.95.95 0 0 1-.937 0c-.304-.164-.469-.468-.469-.82 0-.328.165-.633.47-.797a.95.95 0 0 1 .937 0 .94.94 0 0 1 .468.797m2.25 0a.95.95 0 0 1-.47.82.95.95 0 0 1-.937 0c-.304-.164-.468-.468-.468-.82 0-.328.164-.633.468-.797a.95.95 0 0 1 .938 0 .94.94 0 0 1 .468.797m2.25 0a.95.95 0 0 1-.47.82.95.95 0 0 1-.937 0c-.304-.164-.468-.468-.468-.82 0-.328.164-.633.468-.797a.95.95 0 0 1 .938 0 .94.94 0 0 1 .469.797' />
    </g>
    <defs>
      <clipPath id='c382e64ac9beaddf48e4339588db85ac__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordCaptionFillIcon);
export default ForwardRef;
