import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.75 4.25h-6A.755.755 0 0 0 1 5v9c0 .422.328.75.75.75h5.438c.234.281.492.54.773.75H1.75A1.48 1.48 0 0 1 .25 14V5c0-.82.656-1.5 1.5-1.5h6c.82 0 1.5.68 1.5 1.5v3.164c-.281.07-.516.164-.75.305V5a.77.77 0 0 0-.75-.75m-6 2.625c0-.187.164-.375.375-.375h5.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-5.25a.37.37 0 0 1-.375-.375m.375 1.875h4.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-4.5a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375m0 2.25h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375m8.25 3.75c.938 0 1.781-.492 2.25-1.312a2.52 2.52 0 0 0 0-2.626c-.469-.796-1.312-1.312-2.25-1.312-.96 0-1.805.516-2.273 1.313a2.52 2.52 0 0 0 0 2.624 2.58 2.58 0 0 0 2.273 1.313m0-6c1.195 0 2.297.656 2.906 1.688a3.34 3.34 0 0 1 0 3.374 3.35 3.35 0 0 1-2.906 1.688 3.36 3.36 0 0 1-2.93-1.687 3.34 3.34 0 0 1 0-3.376 3.4 3.4 0 0 1 2.93-1.687m1.031 2.367c.14-.14.399-.14.54 0 .14.14.14.399 0 .54l-1.688 1.687a.397.397 0 0 1-.54 0l-.937-.938a.397.397 0 0 1 0-.539c.14-.14.399-.14.54 0l.679.68z' />
    </g>
    <defs>
      <clipPath id='b2b53b62f55747e04238718ccc9a6c4a__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckCaptionRegularIcon);
export default ForwardRef;
