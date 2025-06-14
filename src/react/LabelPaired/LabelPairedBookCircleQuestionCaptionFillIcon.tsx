import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionCaptionFillIcon = (
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
      <path d='M0 5.75A2.25 2.25 0 0 1 2.25 3.5h7.5c.398 0 .75.352.75.75v3.914a4.13 4.13 0 0 0-3 3.961v.375H2.25a.755.755 0 0 0-.75.75c0 .422.328.75.75.75h5.695c.305.61.75 1.125 1.29 1.5H2.25A2.25 2.25 0 0 1 0 13.25zm3 1.125c0 .21.164.375.375.375h4.5a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-4.5A.385.385 0 0 0 3 6.875m0 1.5c0 .21.164.375.375.375h4.5a.385.385 0 0 0 .375-.375A.4.4 0 0 0 7.875 8h-4.5A.385.385 0 0 0 3 8.375m5.25 3.75c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m1.875-1.078v.14c0 .211.164.376.375.376a.385.385 0 0 0 .375-.376v-.14c0-.117.094-.235.21-.235h.962c.164 0 .328.165.328.329 0 .14-.07.234-.187.304l-.75.375a.41.41 0 0 0-.188.352v.328c0 .21.164.375.375.375A.385.385 0 0 0 12 12.5v-.117l.54-.281c.35-.188.585-.563.585-.961 0-.586-.492-1.055-1.078-1.055h-.961a.95.95 0 0 0-.961.96m.938 2.765c0 .329.234.563.562.563a.555.555 0 0 0 .563-.562.57.57 0 0 0-.563-.563.555.555 0 0 0-.562.563' />
    </g>
    <defs>
      <clipPath id='c8609aebf60953b5a0acdf1698ade4ff__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionCaptionFillIcon);
export default ForwardRef;
