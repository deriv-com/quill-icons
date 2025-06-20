import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketCaptionRegularIcon = (
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
      <path d='M7.477 9.547S7.5 9.523 7.5 9.5l-.023-.023-3.094-2.93a.18.18 0 0 0-.117-.047c-.07 0-.141.07-.141.164V8c0 .21-.187.375-.375.375H.938a.185.185 0 0 0-.188.188v1.874c0 .118.07.188.188.188H3.75c.188 0 .375.188.375.375v1.36c0 .07.07.14.14.14.048 0 .094 0 .118-.023zM8.25 9.5a.85.85 0 0 1-.258.61l-3.094 2.906c-.164.164-.398.234-.632.234a.89.89 0 0 1-.891-.89v-.985H.938A.91.91 0 0 1 0 10.438V8.562c0-.515.398-.937.938-.937h2.437v-.96c0-.493.398-.915.89-.915.235 0 .47.094.633.258l3.094 2.906a.84.84 0 0 1 .258.586M7.875 14h2.25c.61 0 1.125-.492 1.125-1.125v-6.75A1.14 1.14 0 0 0 10.125 5h-2.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h2.25A1.88 1.88 0 0 1 12 6.125v6.75a1.866 1.866 0 0 1-1.875 1.875h-2.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='0ab5f04f4d569dcc35142685fb523a4a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketCaptionRegularIcon);
export default ForwardRef;
