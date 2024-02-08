import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.813 7.375q-.86.078-.938.938v6.874q.078.86.938.938h1.874q.86.078.938.938v.742L7.93 16.28a.9.9 0 0 1 .508-.156h5q.858-.078.937-.937V8.311q-.079-.859-.937-.937zM0 8.313Q.04 7.1.82 6.32q.781-.78 1.993-.82h10.625q1.21.04 1.992.82.78.781.82 1.992v6.876q-.04 1.21-.82 1.992-.782.78-1.992.82H8.71l-3.516 2.344q-.468.273-.937.039a.98.98 0 0 1-.508-.82V18h-.937Q1.6 17.96.82 17.18q-.78-.781-.82-1.992zM10 19.25h1.875v.938q.078.858.938.937h3.75q.273 0 .507.156l2.305 1.524v-.742q.078-.86.938-.938h1.875q.858-.078.937-.937v-6.875q-.079-.86-.937-.938H17.5V10.5h4.688q1.21.04 1.992.82.78.782.82 1.992v6.876q-.04 1.21-.82 1.992-.781.78-1.992.82h-.938v1.563a.98.98 0 0 1-.508.82q-.468.234-.937-.04L16.289 23h-3.477q-1.21-.04-1.992-.82-.78-.781-.82-1.992zm-4.219-10q.39-.938 1.407-1.016h1.64q.704.04 1.211.508.47.508.469 1.211 0 .976-.86 1.485l-.898.507v.04q-.039.546-.625.624-.585-.078-.625-.625v-.39q0-.352.313-.547l1.21-.703a.4.4 0 0 0 .235-.39q-.04-.43-.43-.47h-1.64a.35.35 0 0 0-.235.196v.039q-.274.508-.82.351-.508-.234-.352-.78zm1.446 5.156q0-.508.43-.82a.87.87 0 0 1 .937 0q.43.312.43.82t-.43.82a.87.87 0 0 1-.938 0q-.43-.312-.43-.82' />
    </g>
    <defs>
      <clipPath id='10506516998ab43f167eab1600436066__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionLgBoldIcon);
export default ForwardRef;
