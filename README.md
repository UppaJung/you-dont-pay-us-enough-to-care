<!-- Hiding Harm -->
<!-- # Security Products are Hazardous Products -->
# Media Capture and the Hazards when Security Technologies Backfire

When security tech backfires it can cause us devastating and irreparable harm. The same authentication measures that keep attackers out our online accounts can lock us out, effectively destroying decades of photos, correspondence, and records. When we are driving on a highway and our phone locks our navigation app or denies it access to GPS data, requiring our PIN to unlock it, the security precaution can lead to a fatal crash. Even temporary losses of access can cause permanent harm, such as we are prevented from accessing important medical data before emergency treatment, from reaching out to those we trust when we need them most, or from being reached by others when they need us most. The potential for harm from the technology that purports to protect us grows as we grow ever more reliant on technology to unlock the world around us and help us navigate it.

Yet the industry that sells and promotes security technologies presents security as a tradeoff between harm and *inconvenience*, implying that nobody is harmed when security backfires. Thus, these harms need not be measured or reported, and those unwilling to adopt ever-stricter security should be portrayed as irresponsible. The industry has captured the press to promote and amplify this narrative.

To grasp the severity of the problem consider the analog of pharmaceuticals. Imagine if articles in the The New York Times carried headlines like [‘Why You Need an Antidepressant. Yes, You’](https://www.nytimes.com/2019/08/27/smarter-living/wirecutter/why-you-need-a-password-manager-yes-you.html) and [‘The Best Antidepressants’](https://www.nytimes.com/wirecutter/reviews/best-password-managers/); if they only quoted sources from within the pharmaceutical industry; and if they received a commission when readers bought antidepressants via links in the article. Replace *pharmaceutical* with *tech* and *antidepressant* with *password manager* and *pharmaceutical* that is precisely how industry has captured our media today.

Indeed, The New York Times WireCutter's has carried an article with the headline imploring[‘Why You Need a Password Manager. Yes, You’](https://www.nytimes.com/2019/08/27/smarter-living/wirecutter/why-you-need-a-password-manager-yes-you.html); CNET with [‘Yes, You Need a Password Manager. Your Online Security Depends on It’](https://www.cnet.com/tech/services-and-software/yes-you-need-a-password-manager-your-online-security-depends-on-it/); Engadget has urged [‘You need a password manager -- right now’](https://www.engadget.com/2019-08-26-the-best-password-managers-compared.html); Wired has chided [‘Get a Password Manager. No More Excuses’](https://www.wired.com/story/password-manager-autofill-ad-tech-privacy/); and, lastly, in 2021, PCWorld exhorted to those who might use the free password manager built into their browser in place of those with affiliate links [‘Why your browser’s password manager isn’t good enough’](https://www.pcworld.com/article/393979/why-your-browsers-password-manager-isnt-good-enough.html), recommending LastPass as ‘Best Overall’.

These recommendations were not harmless. In 2021 LastPass had one of the largest shares of the market, if not *the* largest[^lastpass-market-share]. In 2022 attackers compromised LastPass the stole all of its users' password databases. LastPass did not encrypt some of the data in those databases. LastPass did encrypt users' passwords with keys derived from their master passwords, but did so using a key derivation function that was widely considered outdated and substandard, and which LastPass configured with parameters also widely considered outdated and insecure. These shortcomings were not unknown. They been published in 2018.[^lastpass-iterations] Yet, after the breach, press articles did not mention that these flaws were known at the time the products had been recommended. Nor did investigative journalists dig into the millions of dollars, or tens of millions of dollars, that flowed from the developers of LastPass, and the rest of the industry, to the publishers of articles recommending these products.[^money-flow]

[^lastpass-market-share]: In a 2021 [study](https://dash.harvard.edu/handle/1/37374029) co-authored with collaborators at UC Berkeley, LastPass had the largest market share among verified participants.

[^lastpass-iterations]: See Wladimir Palant's [LastPass breach: The significance of these password iterations](https://palant.info/2022/12/28/lastpass-breach-the-significance-of-these-password-iterations/) from 2022 and [Is your LastPass data really safe in the encrypted online vault?](https://palant.info/2018/07/09/is-your-lastpass-data-really-safe-in-the-encrypted-online-vault/) from 2018.

[^money-flow]: The final [SEC Form 10-Q for the six months ending June 30, 2020 of LogMeIn](https://www.sec.gov/ix?doc=/Archives/edgar/data/0001420302/000156459020034298/logm-10q_20200630.htm), the developer of LastPass, reported sales and marketing expenses of \$235.5 million, of which \$92.2 million were bucketed as marketing expenses separate from the sales and marketing personnel, professional services, credit card transaction fees, and so on (the other \$127.7 million). The SEC report does not break down these expenses between LogMeIn's flagship LastPass and other products, and between affiliate commissions and direct advertising. Yet, even if LastPass commissions represented 10\% of that budget, it would mean that over ten million dollars flowed between this one product vendor and the media covering that vendor in the year before the breach alone.

News organizations disingenuously claim that readers can trust product coverage built on affiliate program commissions because editorial staff are “generally unaware” of the referral commission earned from each product.[^editorial-independence]  There's some truth to this. When every product pays an affiliate commission, the editorial staff can rank the best to worst without much impact on commissions. However, the editorial staff also has no reason to investigate, or even mention, the potential harms of using these products, as such investigations might scare readers away from buying any product from the category. The bias we should worry about is that in favor of entire product categories. The news media has a strong incentive to provide more coverage to product categories that deliver the most affiliate revenue, and to make more of it positive.


[^editorial-independence]: The New York Times WireCutter [partnerships page](https://www.nytimes.com/wirecutter/partners/) claims a “strict separation between Commerce and Editorial” and the [about page](https://www.nytimes.com/wirecutter/about/) claims “total editorial independence”. PCWorld, a product of IDG Communications Inc., claims “editorial independence” because [“Our journalists are generally unaware of how much commission – if any – PCWorld receives from a purchase.”](https://www.pcworld.com/about/affiliate-link-policy) Even [Consumer Reports](https://www.consumerreports.org/), the gold standard in product coverage that insists on buying the products it reviews and touts being “Ad-free. Influence-free. Powered by consumers.”, collects affiliate commissions, including via their links to recommended password managers. While LastPass was not among their recommendations for 2023-05-12, their review of LastPass still rated it “Excellent in data security” despite all the evidence to the contrary.

The LastPass breach was newsworthy because of its scale, impacting all users, and the mystery of who had stolen the data.[^not-unique] If the media had not re-examined their to recommending products that exposed customers to attack, we cannot expect them to reckon with harms that appear self-inflicted, as is typically the case when security backfires. Most of us don't report or speak up when the security measures mean to protect us backfire because we blame ourselves. Since losses occur one person at a time, few incidents are large enough to be newsworthy[^cryptocurrency]. And, unlike breaches, service providers are not required to report when accounts or data are lost but not exposed to attackers.

[^not-unique]: LastPass was far from the first security product that exposed users to new attacks, as attackers have also exploited flaws in antivirus products to compromise systems that might had been safe if users had not adopted them.

Though nearly all of us have suffered harm when security technologies backfire, the aggregate harm -- surely including many millions of lifetimes of lost memories and records -- is almost entirely unmeasured and invisible to society, and even to experts in the industry. Instead, we hear only attention-grabbing security stories like breaches and ransomware, and the drum beat that more security is always better. 

<!-- The tech industry would readily fault us for the harms we face when the security measures that are supposed to protect us backfire...but they rarely have to. -->

[^cryptocurrency]: Notable exceptions are when cryptocurrency holders lose the keys to millions of dollars in assets.

The unreported and uncounted harms are not unlike occupational deaths and injuries at the start of the industrial revolution, when the technological industrialists of the timed blamed these ‘accidents‘ on the victims (workers), when employers were not required to report them, and the media did not consider the individual deaths newsworthy. The harms that occur when security backfires are not unlike automotive deaths, which were initially unreported, uncounted, and which the media and technological industrialists of the time blamed on everyone but the cars they produced: initially drivers, until the bogeyman of the jaywalker was invented.[^no-accidents]

[^no-accidents]: For a history of industrial occupational deaths and automotive crashes were once uncounted and invisible, I suggest [Jessie Singer](https://jessiesinger.com/)'s 2022 book [“There Are No Accidents”](https://www.simonandschuster.com/books/There-Are-No-Accidents/Jessie-Singer/9781797139241).

To address media capture, we need to learn to recognize it and help the public to recognize it, so that our societal immune systems can better target it. We need investigators with expertise in media and linguistic analysis to analyze the bias in coverage resulting from media capture, and we need investigators with expertise is financial forensics to uncover the quantities money being transferred from the industry to news outlets. In the long term, we may need to require companies to disclosed all such transfers.

To address the harms caused when security technology backfires, we need to treat security products like other hazardous products. So long as these harms are uncounted they will go unaddressed. We need researchers to measure the prevalence of harms and their impact, and aggregate those losses over the affected populations. We need investigators to continue to track losses longitudinally (over time) even though such work is harder to fund, publish, and attract media attention to. In the long-term, we may to require tech companies to track and report the harms when security backfires as they do when security is breached. More radically, we might even want to require certain classes of security tech to be independently tested for potential harms before deployment, as we do for other hazardous products.

