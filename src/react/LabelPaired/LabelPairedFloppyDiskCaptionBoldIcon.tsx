import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskCaptionBoldIcon = (
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
      <path d='M1.375 5.75v7.5c0 .21.164.375.375.375h7.5a.385.385 0 0 0 .375-.375V7.508a.38.38 0 0 0-.117-.258l.797-.797c.28.281.422.656.422 1.055v5.742c0 .844-.657 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h5.742c.399 0 .774.164 1.055.445l1.758 1.758-.797.797L7.75 5.492V5.47v2.343a.555.555 0 0 1-.562.563h-4.5a.54.54 0 0 1-.563-.562V5.374H1.75a.385.385 0 0 0-.375.375m1.875-.375V7.25h3.375V5.375zM4 11c0-.516.281-1.008.75-1.29a1.55 1.55 0 0 1 1.5 0c.445.282.75.774.75 1.29 0 .54-.305 1.031-.75 1.313a1.55 1.55 0 0 1-1.5 0A1.52 1.52 0 0 1 4 11' />
    </g>
    <defs>
      <clipPath id='93de15a1e2c1e8624181300aaa08f802__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskCaptionBoldIcon);
export default ForwardRef;
