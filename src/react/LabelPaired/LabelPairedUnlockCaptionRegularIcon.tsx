import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.25 6.5V8h5.625q.797.023 1.336.54.516.538.539 1.335v3.75q-.023.797-.54 1.336-.538.515-1.335.539h-6.75q-.797-.023-1.336-.54-.516-.538-.539-1.335v-3.75q.023-.797.54-1.336.538-.515 1.335-.539H2.5V6.5q.024-1.266.867-2.133.868-.843 2.133-.867 1.032.024 1.805.61.773.585 1.078 1.546.07.328-.258.446-.35.07-.469-.235a2.2 2.2 0 0 0-.797-1.172A2.4 2.4 0 0 0 5.5 4.25q-.96.024-1.594.656-.632.633-.656 1.594M1 9.875v3.75q.024.469.328.797.328.304.797.328h6.75q.469-.024.797-.328.304-.329.328-.797v-3.75a1.22 1.22 0 0 0-.328-.797 1.22 1.22 0 0 0-.797-.328h-6.75a1.22 1.22 0 0 0-.797.328A1.22 1.22 0 0 0 1 9.875' />
    </g>
    <defs>
      <clipPath id='d3669379fecbc4cf4a5c3611b031a914__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockCaptionRegularIcon);
export default ForwardRef;
