import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m.117-8.25c.094 0 .188.023.258.07l.727.282a.553.553 0 0 0 .726-.329.56.56 0 0 0-.305-.726l-.726-.281a1.7 1.7 0 0 0-.68-.141c-1.008 0-1.828.844-1.828 1.852v.773h-.164a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h.164v.258c0 .375-.07.773-.258 1.125l-.234.422a.6.6 0 0 0 .023.562c.094.164.282.258.493.258h3.375a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.563H5.203q.21-.597.211-1.266V9.5h.961a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-.96v-.773a.71.71 0 0 1 .702-.727' />
    </g>
    <defs>
      <clipPath id='cd22e69a2d25d1cda9d0399b4c314222__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingCaptionFillIcon);
export default ForwardRef;
