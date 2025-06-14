import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightCaptionRegularIcon = (
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
      <path d='M6 3.5c.188 0 .375.188.375.375V5.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V3.875c0-.187.164-.375.375-.375m-6 6c0-.187.164-.375.375-.375H2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.375A.37.37 0 0 1 0 9.5m9.375 0c0-.187.164-.375.375-.375h1.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H9.75a.37.37 0 0 1-.375-.375M6 12.875c.188 0 .375.188.375.375v1.875c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V13.25c0-.187.164-.375.375-.375M1.758 5.258c.14-.14.375-.14.515 0L3.61 6.594c.141.14.141.375 0 .539a.397.397 0 0 1-.539 0L1.758 5.797c-.164-.14-.164-.375 0-.54m0 8.484a.332.332 0 0 1 0-.515L3.07 11.89c.14-.141.399-.141.54 0 .14.14.14.398 0 .539l-1.337 1.312a.332.332 0 0 1-.515 0m6.61-6.61c-.141-.163-.141-.398 0-.538l1.335-1.336c.14-.14.375-.14.54 0 .14.164.14.398 0 .539L8.905 7.133c-.14.14-.375.14-.539 0m0 4.759c.163-.141.398-.141.538 0l1.336 1.336c.14.14.14.375 0 .515-.164.164-.398.164-.539 0L8.367 12.43a.397.397 0 0 1 0-.54M7.874 9.5c0-.656-.375-1.266-.937-1.617a1.91 1.91 0 0 0-1.875 0c-.586.351-.938.96-.938 1.617 0 .68.352 1.29.938 1.64.562.329 1.289.329 1.875 0 .562-.35.937-.96.937-1.64m-4.5 0c0-.937.492-1.781 1.313-2.25a2.52 2.52 0 0 1 2.625 0c.796.469 1.312 1.313 1.312 2.25 0 .96-.516 1.805-1.312 2.273a2.52 2.52 0 0 1-2.625 0A2.58 2.58 0 0 1 3.375 9.5' />
    </g>
    <defs>
      <clipPath id='91b39d4623f71365334aad761b678cdf__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightCaptionRegularIcon);
export default ForwardRef;
