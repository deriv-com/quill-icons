import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBellOnSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9 3.75c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629v.492c1.02.182 1.85.647 2.488 1.395.657.747.994 1.65 1.012 2.707v.902a5.536 5.536 0 0 0 1.203 3.418l.41.52a.71.71 0 0 1 .082.683.694.694 0 0 1-.601.383H3.53a.694.694 0 0 1-.601-.383.71.71 0 0 1 .082-.683l.41-.52a5.536 5.536 0 0 0 1.203-3.418V9.22c.018-1.058.355-1.96 1.012-2.707.638-.748 1.467-1.213 2.488-1.395v-.492c0-.255.082-.465.246-.629A.852.852 0 0 1 9 3.75Zm0 2.625h-.219c-.802.018-1.476.292-2.023.82-.529.547-.802 1.222-.82 2.024v.902a6.59 6.59 0 0 1-1.094 3.691h8.312a6.891 6.891 0 0 1-1.094-3.69v-.903c-.018-.802-.291-1.477-.82-2.024-.547-.528-1.221-.802-2.023-.82H9ZM10.75 16c0 .474-.173.884-.52 1.23-.346.347-.756.52-1.23.52s-.884-.173-1.23-.52A1.682 1.682 0 0 1 7.25 16h3.5ZM.25 9.219c.036-.401.255-.62.656-.656h2.188c.4.036.62.255.656.656-.036.4-.255.62-.656.656H.906c-.4-.036-.62-.255-.656-.656Zm14.656-.656h2.188c.4.036.62.255.656.656-.037.4-.255.62-.656.656h-2.188c-.4-.036-.62-.255-.656-.656.037-.401.255-.62.656-.656Zm1.696-4.239c.145.383.045.684-.301.903l-1.75.875c-.383.145-.675.045-.875-.301-.146-.383-.055-.675.273-.875l1.75-.875c.383-.146.684-.055.903.273Zm-14.903.903c-.328-.22-.42-.52-.273-.903.2-.328.492-.419.875-.273l1.75.875c.328.2.428.492.3.875-.218.328-.519.428-.902.3L1.7 5.228Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnSmBoldIcon);
export default ForwardRef;
