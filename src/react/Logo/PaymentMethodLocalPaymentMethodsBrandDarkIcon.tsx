import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodLocalPaymentMethodsBrandDarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#fff'>
      <path d='M69.924 33v-8.376h1.824v6.756h3.192V33zM78.63 33.144q-.696 0-1.248-.228a2.54 2.54 0 0 1-.924-.66 3.1 3.1 0 0 1-.576-1.044 4.3 4.3 0 0 1-.204-1.368q0-.756.204-1.368t.576-1.032q.384-.432.924-.66a3.2 3.2 0 0 1 1.248-.228q.696 0 1.236.228.552.228.924.66.384.42.588 1.032t.204 1.368-.204 1.368a3 3 0 0 1-.588 1.044 2.4 2.4 0 0 1-.924.66q-.54.228-1.236.228m0-1.404q.528 0 .816-.324t.288-.924v-1.284q0-.6-.288-.924t-.816-.324-.816.324-.288.924v1.284q0 .6.288.924t.816.324M85.392 33.144q-.708 0-1.26-.228a2.6 2.6 0 0 1-.925-.66 2.9 2.9 0 0 1-.563-1.044 4.6 4.6 0 0 1-.193-1.368q0-.756.193-1.356.192-.612.563-1.044.372-.432.925-.66a3.3 3.3 0 0 1 1.26-.228q.96 0 1.596.432.647.432.924 1.212l-1.44.624a1.2 1.2 0 0 0-.348-.612q-.264-.252-.733-.252-.54 0-.816.36-.276.348-.276.948v1.176q0 .6.276.948t.816.348q.48 0 .756-.252.288-.264.42-.684l1.38.6q-.311.9-.972 1.32-.647.42-1.584.42M93.703 33q-.48 0-.804-.3-.312-.3-.396-.804h-.072a1.48 1.48 0 0 1-.636.936q-.492.312-1.212.312-.948 0-1.452-.504t-.504-1.332q0-.996.72-1.476.732-.492 1.98-.492h.996v-.396q0-.456-.24-.72-.24-.276-.804-.276-.528 0-.84.228t-.516.516l-1.056-.936q.384-.564.96-.876.588-.324 1.584-.324 1.344 0 2.016.588t.672 1.716v2.76h.588V33zm-2.46-1.092q.444 0 .756-.192.324-.192.324-.624v-.744h-.864q-1.044 0-1.044.708v.18q0 .348.216.516.216.156.612.156M97.643 33q-.912 0-1.344-.444-.42-.444-.42-1.284V24.12h1.776v7.5h.792V33zM69.924 45v-8.376h3.96q.588 0 1.056.204.468.192.792.54.336.348.516.852.18.492.18 1.08 0 .6-.18 1.092t-.516.84q-.324.348-.792.552a2.8 2.8 0 0 1-1.056.192h-2.136V45zm1.824-4.608h1.92q.408 0 .636-.204.24-.216.24-.624v-.528q0-.408-.24-.612-.228-.216-.636-.216h-1.92zM82.183 45q-.48 0-.804-.3-.312-.3-.396-.804h-.072a1.48 1.48 0 0 1-.636.936q-.492.312-1.212.312-.948 0-1.452-.504t-.504-1.332q0-.996.72-1.476.732-.492 1.98-.492h.996v-.396q0-.456-.24-.72-.24-.276-.804-.276-.528 0-.84.228t-.516.516l-1.056-.936q.384-.564.96-.876.588-.324 1.584-.324 1.344 0 2.016.588t.672 1.716v2.76h.588V45zm-2.46-1.092q.444 0 .756-.192.324-.192.324-.624v-.744h-.864q-1.044 0-1.044.708v.18q0 .348.216.516.216.156.612.156M88.106 38.7h1.656l-2.424 7.272q-.24.732-.684 1.08-.432.348-1.248.348h-1.104v-1.38h1.188l.216-.696-2.208-6.624h1.764l.924 2.94.456 1.824h.072l.468-1.824zM90.664 45v-6.3h1.776v1.068h.072q.168-.504.576-.852.408-.36 1.116-.36.648 0 1.104.324t.66.948h.036a1.7 1.7 0 0 1 .684-.9q.252-.168.564-.264a2 2 0 0 1 .672-.108q.912 0 1.392.648.492.648.492 1.848V45h-1.776v-3.804q0-1.2-.864-1.2-.396 0-.72.228t-.324.696V45h-1.776v-3.804q0-1.2-.864-1.2-.192 0-.384.06a1 1 0 0 0-.336.168 1 1 0 0 0-.24.3.9.9 0 0 0-.084.396V45zM104.015 45.144q-.72 0-1.284-.228a2.8 2.8 0 0 1-.96-.66 3 3 0 0 1-.588-1.044 4.6 4.6 0 0 1-.192-1.368q0-.744.192-1.344.192-.612.564-1.044.384-.432.936-.66.552-.24 1.26-.24.78 0 1.332.264.564.264.912.708.36.444.516 1.032.168.576.168 1.212v.528h-4.044v.096q0 .624.336.996.336.36 1.056.36.552 0 .9-.216.348-.228.648-.54l.888 1.104q-.42.492-1.104.768-.672.276-1.536.276m-.036-5.28q-.54 0-.852.36-.3.348-.3.936v.096h2.208v-.108q0-.576-.264-.924-.252-.36-.792-.36M108.125 45v-6.3h1.776v1.068h.072q.168-.492.588-.852t1.164-.36q.972 0 1.464.648.504.648.504 1.848V45h-1.776v-3.804q0-.612-.192-.9-.192-.3-.684-.3-.216 0-.42.06-.204.048-.372.168a.9.9 0 0 0-.252.3.8.8 0 0 0-.096.396V45zM117.481 45q-.924 0-1.404-.468-.468-.468-.468-1.368V40.08h-.888V38.7h.444q.36 0 .492-.168.132-.18.132-.504v-1.032h1.596V38.7h1.248v1.38h-1.248v3.54h1.152V45zM76.188 51.504h-.036l-.612 1.224-1.632 2.964-1.596-2.952-.636-1.32h-.036V57h-1.716v-8.376h1.932l2.052 3.924h.024l2.028-3.924h1.944V57h-1.716zM82.288 57.144q-.72 0-1.284-.228a2.8 2.8 0 0 1-.96-.66 3 3 0 0 1-.588-1.044 4.6 4.6 0 0 1-.192-1.368q0-.744.192-1.344.192-.612.564-1.044.384-.432.936-.66.552-.24 1.26-.24.78 0 1.332.264.564.264.912.708.36.444.516 1.032.168.576.168 1.212v.528H81.1v.096q0 .624.336.996.336.36 1.056.36.552 0 .9-.216.348-.228.648-.54l.888 1.104q-.42.492-1.104.768-.672.276-1.536.276m-.036-5.28q-.54 0-.852.36-.3.348-.3.936v.096h2.208v-.108q0-.576-.264-.924-.252-.36-.792-.36M88.606 57q-.924 0-1.404-.468-.468-.468-.468-1.368V52.08h-.888V50.7h.444q.36 0 .492-.168.132-.18.132-.504v-1.032h1.596V50.7h1.248v1.38H88.51v3.54h1.152V57zM90.992 48.12h1.776v3.648h.072q.168-.492.588-.852t1.164-.36q.972 0 1.464.648.504.648.504 1.848V57h-1.776v-3.804q0-.612-.192-.9-.192-.3-.684-.3-.216 0-.42.06-.204.048-.372.168a.9.9 0 0 0-.252.3.8.8 0 0 0-.096.396V57h-1.776zM100.696 57.144a3.2 3.2 0 0 1-1.248-.228 2.54 2.54 0 0 1-.923-.66 3.1 3.1 0 0 1-.577-1.044 4.3 4.3 0 0 1-.204-1.368q0-.756.204-1.368t.577-1.032q.383-.432.923-.66a3.2 3.2 0 0 1 1.248-.228q.696 0 1.236.228.552.228.924.66.384.42.588 1.032t.204 1.368-.204 1.368a3 3 0 0 1-.588 1.044 2.4 2.4 0 0 1-.924.66q-.54.228-1.236.228m0-1.404q.528 0 .816-.324t.288-.924v-1.284q0-.6-.288-.924t-.816-.324-.816.324-.287.924v1.284q0 .6.287.924.288.324.816.324M108.778 55.944h-.06a1.7 1.7 0 0 1-.228.48 1.634 1.634 0 0 1-.888.624 1.7 1.7 0 0 1-.576.096q-1.2 0-1.812-.84-.612-.852-.612-2.46t.612-2.448 1.812-.84q.612 0 1.08.336.48.336.612.864h.06V48.12h1.776V57h-1.776zm-1.164-.24q.504 0 .828-.24a.81.81 0 0 0 .336-.684v-1.86a.78.78 0 0 0-.336-.672q-.324-.252-.828-.252t-.84.36q-.324.348-.324.948v1.092q0 .6.324.96.336.348.84.348M114.351 57.144q-.912 0-1.536-.288-.624-.3-1.116-.84l1.044-1.056q.336.372.744.588t.924.216q.528 0 .732-.156a.55.55 0 0 0 .204-.444q0-.444-.636-.528l-.684-.084q-2.124-.264-2.124-1.944 0-.456.168-.828.18-.384.492-.648a2.2 2.2 0 0 1 .768-.42 3.1 3.1 0 0 1 1.02-.156q.492 0 .864.072.384.06.672.192.3.12.54.312.252.18.492.408l-1.02 1.044q-.3-.3-.684-.468a1.74 1.74 0 0 0-.768-.18q-.456 0-.648.144a.46.46 0 0 0-.192.384q0 .252.132.396.144.132.528.192l.708.096q2.076.276 2.076 1.896 0 .456-.192.84t-.552.672a2.6 2.6 0 0 1-.852.432 3.6 3.6 0 0 1-1.104.156' />
    </g>
    <g>
      <path
        fill='#5DAF5D'
        d='M56.263 26.613 43.75 18.406c-1.138-.812-2.763-.487-3.575.732L25.388 41.4c-.163.163-.082.488.162.569l2.762 1.3 7.394-5.282c1.463-1.056 3.413-.893 4.794.244l.406.325c1.544 1.3 1.706 3.657.488 5.2l-8.938 11.782 3.331 2.437c1.22.813 2.763.487 3.575-.731l17.632-27.056c.812-1.22.487-2.763-.731-3.575M47.73 30.43c-.569.894-2.031 1.056-3.169.325s-1.624-2.112-.974-3.006c.568-.894 2.03-1.056 3.168-.325 1.056.731 1.544 2.113.975 3.006'
      />
      <path
        fill='#fff'
        d='M44.563 30.756c1.137.732 2.6.57 3.168-.325.569-.893.081-2.275-.975-3.006-1.137-.731-2.6-.569-3.169.325-.65.894-.162 2.275.975 3.006'
      />
      <g fill='#347036'>
        <path d='m59.35 31.65-1.219-.813-16.087 24.7 17.631-21.612c.569-.65.406-1.706-.325-2.275M41.394 43.837c1.544-.08 2.925-.812 3.737-2.03 1.544-2.438.325-5.932-2.681-7.882s-6.744-1.625-8.288.812c-.893 1.3-.893 3.007-.243 4.55l1.787-1.3c1.463-1.056 3.413-.893 4.794.244l.406.325c1.544 1.381 1.788 3.656.488 5.281' />
      </g>
      <path
        fill='#FFB85A'
        d='M40.094 39.288c-1.138-1.057-2.844-1.138-4.063-.163l-7.068 5.362c-.326.244-.813.325-1.22.082L24.25 42.78c-.488-.325-.65-.975-.325-1.462l6.256-9.507-6.419 1.87c-1.462.405-2.68 1.3-3.412 2.518l-6.663 10.563c-.65.974-1.624 1.706-2.762 1.868L8 49.2V63l16.656-3.075c2.275-.569 4.307-1.787 5.769-3.656l9.994-12.675c.975-1.382.894-3.25-.325-4.306'
      />
    </g>
    <defs>
      <clipPath id='b5abd3c111e51eb148fbef03ad5dcac3__a'>
        <path fill='#fff' d='M8 17h53v46H8z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodLocalPaymentMethodsBrandDarkIcon);
export default ForwardRef;
