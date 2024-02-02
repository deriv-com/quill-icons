import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.46 8.117q-2.694.508-4.413 2.54Q1.289 12.647 1.25 15.5q.078 3.203 2.188 5.313T8.75 23a7.7 7.7 0 0 0 3.672-.977q-3.203-.312-5.274-2.578Q5.078 17.22 5 13.938q0-1.719.664-3.204a7.35 7.35 0 0 1 1.797-2.617m2.58-.86q.077.47-.313.704a7.2 7.2 0 0 0-2.54 2.46q-.937 1.564-.937 3.517.078 2.93 1.992 4.843 1.953 1.953 4.844 2.032.625 0 1.172-.118.468-.04.664.352.195.39-.117.742-2.422 2.383-6.055 2.461-2.46-.04-4.414-1.21a8.2 8.2 0 0 1-3.125-3.126Q.039 17.961 0 15.5q.04-2.46 1.172-4.414A8.5 8.5 0 0 1 4.336 7.96Q6.289 6.789 8.71 6.75q.39 0 .742.04.47.038.586.468' />
    </g>
    <defs>
      <clipPath id='40d93a685885215eb896e44cbcd88c04__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonLgRegularIcon);
export default ForwardRef;
