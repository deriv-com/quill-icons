import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketCaptionRegularIcon = (
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
      <path d='m11.227 9.477-3.094-2.93a.18.18 0 0 0-.117-.047c-.07 0-.141.07-.141.164V8c0 .21-.187.375-.375.375H4.688a.185.185 0 0 0-.188.188v1.874c0 .118.07.188.188.188H7.5c.188 0 .375.188.375.375v1.36c0 .07.07.14.14.14.047 0 .094 0 .118-.023l3.094-2.93s.023-.024.023-.047zM12 9.5a.85.85 0 0 1-.258.61l-3.094 2.906c-.164.164-.398.234-.632.234a.89.89 0 0 1-.891-.89v-.985H4.688a.91.91 0 0 1-.938-.937V8.562c0-.515.398-.937.938-.937h2.437v-.96c0-.493.398-.915.89-.915.235 0 .47.094.633.258l3.094 2.906A.84.84 0 0 1 12 9.5M4.125 5h-2.25C1.242 5 .75 5.516.75 6.125v6.75A1.11 1.11 0 0 0 1.875 14h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-2.25A1.85 1.85 0 0 1 0 12.875v-6.75C0 5.094.82 4.25 1.875 4.25h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375' />
    </g>
    <defs>
      <clipPath id='dd8f3bbd55e7d395556ec61aaec5292a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketCaptionRegularIcon);
export default ForwardRef;
