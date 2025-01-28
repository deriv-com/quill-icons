import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkCaptionRegularIcon = (
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
      <path d='M3.79 7.906A.34.34 0 0 1 3.554 8H1.562A.555.555 0 0 0 1 8.563v1.874c0 .329.234.563.563.563h1.992c.07 0 .164.047.234.094L7 13.954V5.07zM7.046 4.25a.72.72 0 0 1 .703.703v9.117c0 .375-.328.68-.703.68-.188 0-.352-.047-.469-.164l.258-.281-.258.28-3.187-2.835H1.563A1.31 1.31 0 0 1 .25 10.438V8.562c0-.703.586-1.312 1.313-1.312H3.39l3.187-2.812a.65.65 0 0 1 .469-.188m2.836 3.117L11.5 8.984l1.594-1.617c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L12.016 9.5l1.617 1.617c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L11.5 10.038l-1.617 1.617a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539L10.962 9.5 9.344 7.906a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0' />
    </g>
    <defs>
      <clipPath id='d4be059e0c6c0c846f0499a1eaf13a9c__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkCaptionRegularIcon);
export default ForwardRef;
